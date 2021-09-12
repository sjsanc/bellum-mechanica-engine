// extended from https://maxwellforbes.com/posts/typescript-ecs-implementation
// Some state for the entity, such as armour or position
class Component {
}
// A field that manages a finite list of components for all entities
// Example: location handler for positions
class System {
}
class ComponentContainer {
    constructor() {
        this.map = new Map();
    }
    add(component) {
        this.map.set(component.constructor, component);
    }
    get(componentClass) {
        return this.map.get(componentClass);
    }
    has(componentClass) {
        return this.map.has(componentClass);
    }
    hasAll(componentClasses) {
        for (const cls of componentClasses) {
            if (!this.map.has(cls)) {
                return false;
            }
        }
        return true;
    }
    delete(componentClass) {
        this.map.delete(componentClass);
    }
}
class ECS {
    constructor() {
        // Main state
        this.entities = new Map();
        this.systems = new Map();
        // Bookkeeping for entities.
        this.nextEntityID = 0;
        this.entitiesToDestroy = new Array();
    }
    addEntity() {
        const entity = this.nextEntityID;
        this.nextEntityID++;
        this.entities.set(entity, new ComponentContainer());
        return entity;
    }
    removeEntity(entity) {
        this.entitiesToDestroy.push(entity);
    }
    addComponent(entity, component) {
        this.entities.get(entity).add(component);
        this.checkE(entity);
    }
    getComponents(entity) {
        return this.entities.get(entity);
    }
    removeComponent(entity, componentClass) {
        this.entities.get(entity).delete(componentClass);
        this.checkE(entity);
    }
    addSystem(system) {
        // Checking invariant: systems should not have an empty
        // Components list, or they'll run on every entity. Simply remove
        // or special case this check if you do want a System that runs
        // on everything.
        if (system.componentsRequired.size == 0) {
            console.warn("System not added: empty Components list.");
            console.warn(system);
            return;
        }
        // Give system a reference to the ECS so it can actually do
        // anything.
        system.ecs = this;
        // Save system and set who it should track immediately.
        this.systems.set(system, new Set());
        for (const entity of this.entities.keys()) {
            this.checkES(entity, system);
        }
    }
    removeSystem(system) {
        this.systems.delete(system);
    }
    update() {
        // Update all systems.
        for (const [system, entities] of this.systems.entries()) {
            system.update(entities);
        }
        // Remove any entities that were marked for deletion during the
        // update.
        while (this.entitiesToDestroy.length > 0) {
            this.destroyEntity(this.entitiesToDestroy.pop());
        }
    }
    destroyEntity(entity) {
        this.entities.delete(entity);
        for (const entities of this.systems.values()) {
            entities.delete(entity); // no-op if doesn't have it
        }
    }
    checkE(entity) {
        for (const system of this.systems.keys()) {
            this.checkES(entity, system);
        }
    }
    checkES(entity, system) {
        const have = this.entities.get(entity);
        const need = system.componentsRequired;
        if (have.hasAll(need)) {
            // should be in system
            this.systems.get(system).add(entity); // no-op if in
        }
        else {
            // should not be in system
            this.systems.get(system).delete(entity); // no-op if out
        }
    }
}
//# sourceMappingURL=ecs.js.map