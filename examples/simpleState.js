class Person extends React.Component {
    constructor() {
      this.state = {
        mood: 'tired'
      };
    }

    render() {
      return (
        <div>
          <p>Hello. I'm {this.props.name}.</p>
          <p>I'm a little {this.state.mood} today.</p>
        </div>
      );
    }
  }