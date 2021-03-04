### Redux

One central global state called store that all components can access
Single source of truth for all data
Establishes strict rules for accessing data

Redux store - contains current state of the application
Redux Actions - Type and Payload - Explicitly define events that can happen in the application
Reducers - Specifies what happens to redux store state when an action occurs using payload data

-   Only allow actions that are explicitly defined
-   Only allow changes based on a preexisting definition present in the reducers
