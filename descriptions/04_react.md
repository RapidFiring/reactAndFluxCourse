# react description #

## props & states ##
### Props ###
- Look like HTML attributes
- IMMUTABLE
- child components
- `this.props.username`
- `getDefaultProps`

### State ###
- Holds mutable state
- Top Level
- `this.state.username`
- `getInitialState`
    
## component lifecycle ##
### componentWillMount ###
- when
    - Before initial render
    - both _client_ & **server**
- why
    - good spot to initialize state
    
### componentDidMount ###
- when
    - immediately after render
    
- why
    - Access the DOM
    - integrate with 3rd Party Libs (frameWorks)
    - set timers
    - make AJAX requests
    
### componentWillReceiveProps ###
- when
    - when receiving new props
    - **not called on initial render**
    
- why
    - set state before a render
    - like _PropertiesChanged_

### shouldComponentUpdate ###
- when
    - before render when new props or state are being received
    - **not called on initial render**

- why
    - **performance** --> return false to void unnecessary re-renders!
    
### componentWillUpdate ###
- when
    - immediately before render when new props or state are being received
    - **not called on initial render**
    
- why
    - preparation for an update
    - **cannot call `setState` here!**
    
### componentDidUpdate ###
- when
    - after component's updates are flushed to the DOM
    - **not called for the initial render**

- why
    - work with the DOM after an update
    
### componentWillUnMount ###
- when
    - Immediately before component is removed from the DOM

- why
    - cleanup
    
## Keys for dynamic children ##

- add a key to dynamic child elements
    - `<tr key={author.id}>`
