import React, {Components} from 'react';

class Template extends Components {
  render() {
    return(
      <div>
        <header>
          <h1>tictacjosie</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template
