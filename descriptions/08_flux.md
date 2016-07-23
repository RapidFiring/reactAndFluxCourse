# the FLUX way #

pattern for unidirectional data flow

## action ##
- Encapsulate events
    - deleteUser
    - addItem
- Triggered by user ineractions and server
    - user
    - server    
- passed to dispacther

- action payload has type and data 
    ```
    {
        type: USER_SAVED,
        data: {
            firstName: 'Rapid',
            lastName: 'Firing'
        }
    }
    ```

## dispatcher ##
- singleton
- Central Hub - There is only one!!
- Holds list of callbacks
- broadcast payload to registered callbacks
- sends actions to stores

    ### constants ###
    - keeps things organized
    - provides high level overview of what the app actually does

## store ##
- holds app state, logic, data retrieval
- not a model - _contains_ model
- one, or many
- registers callbacks with dispatcher (only stores!!!)
- uses node's EventEmitter

    **only the store knows how to update data!!**

    ### structure of a store (pattern) ###
    every store has these common traits (aka interface)
    1. extend EventEmitter
    2. addChangeListener and removeChangeListener
    3. emitChange
    
    ![DPS](https://github.com/rapidfiring/reactAndFluxCourse/descriptions/img/dispatcher_payload_stores.png') 

## view ##
also called _**controller views**_

- top level component
- interacts with stores
- holds data in state
- sends data to children as props

## flux api ##
- `register(function callback)` - "hey dispatcher, run me when actions happen. - store"
- `unregister(string id)` - "hey dispatcher, stop worring about this action. - store"
- `waitFor(array<string> id)` - "Update this store first. - store"
- `dispatch(object payload)` - "hey dispatcher, tell the stores about this action. - Action"
- `isDispatching()` - "I'm busy dispatching callbacks right now"

## sounds like publish - subscribe model !? ##
not quite.. 

differs in two ways
1. every payload is dispatched to all registered callbacks.
2. callbacks wait for other callbacks