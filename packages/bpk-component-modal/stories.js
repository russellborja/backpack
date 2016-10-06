import React, { Component } from 'react'
import { storiesOf } from '@kadira/storybook'

import BpkButton from 'bpk-component-button'
import BpkParagraph from 'bpk-component-paragraph'

import BpkModal from './index'

class ModalContainer extends Component {
  constructor () {
    super()

    this.onOpen = this.onOpen.bind(this)
    this.onClose = this.onClose.bind(this)

    this.state = {
      isOpen: false
    }
  }

  onOpen () {
    this.setState({
      isOpen: true
    })
  }

  onClose () {
    this.setState({
      isOpen: false
    })
  }

  render () {
    const { buttonText, ...rest } = this.props

    return (
      <div>
        <div id='application-container'>
          <BpkButton onClick={this.onOpen}>{buttonText}</BpkButton>
        </div>
        <BpkModal isOpen={this.state.isOpen} onClose={this.onClose} {...rest} />
      </div>
    )
  }
}

storiesOf('bpk-component-modal', module)
  .add('Default', () => (
    <ModalContainer
      title='Modal title'
      closeLabel='Close modal'
      buttonText='Open modal'
      getApplicationElement={() => document.getElementById('application-container')}
    >
      This is a default modal. You can put anything you want in here.
    </ModalContainer>
  ))
  .add('Wide', () => (
    <ModalContainer
      wide
      title='Modal title'
      closeLabel='Close modal'
      buttonText='Open wide modal'
      getApplicationElement={() => document.getElementById('application-container')}
    >
      This is a wide modal.
    </ModalContainer>
  ))
  .add('Overflowing', () => (
    <ModalContainer
      title='Modal title'
      closeLabel='Close modal'
      buttonText='Open overflowing modal'
      getApplicationElement={() => document.getElementById('application-container')}
    >
      <BpkParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus nunc, tempor eget dapibus eget, ultrices
        sit amet nunc. Maecenas aliquet quam nec dui hendrerit, dictum fermentum turpis finibus. Proin ante purus,
        blandit id quam vitae, dignissim venenatis felis. Donec congue sem ac felis semper, at efficitur enim
        pulvinar. Nunc molestie in orci sit amet vestibulum. Ut mattis ante ac lacus ornare, nec sagittis ex finibus.
        Fusce condimentum dolor ac dignissim rutrum. Vivamus laoreet in lectus eu congue. Aliquam mollis, mauris in
        tincidunt gravida, orci urna porta sapien, ac facilisis leo eros et elit. Vivamus fermentum neque metus, et
        convallis lectus ultricies in. Phasellus eget erat in nibh pretium convallis. Fusce sed semper ante. Phasellus
        eget elementum lacus.
      </BpkParagraph>
      <BpkParagraph>
        Nunc pretium erat nec ante faucibus molestie. Vestibulum ultrices purus quis lorem consectetur sollicitudin.
        Mauris dapibus ac libero et bibendum. In malesuada eget nisl ac bibendum. Etiam ac nulla egestas, luctus eros
        quis, ornare libero. Fusce a lacinia dolor. Nullam auctor finibus dui, sit amet luctus nibh blandit in.
        Maecenas justo tortor, faucibus ut ante ac, eleifend ornare nisl. Quisque tempus, metus sit amet fringilla
        tristique, urna mi tincidunt nulla, et tristique eros mauris sed ex. Sed lorem odio, elementum congue tellus
        vitae, suscipit hendrerit ipsum.
      </BpkParagraph>
      <BpkParagraph>
        Curabitur a posuere dolor. Maecenas accumsan magna nec risus facilisis tristique. Aliquam mollis lectus ac mi
        scelerisque condimentum. Sed id est ut felis euismod maximus. Fusce sit amet erat imperdiet, lacinia libero
        vitae, eleifend erat. Integer cursus, est vitae hendrerit eleifend, justo ipsum mattis neque, vitae
        consectetur arcu massa vitae orci. Sed rhoncus nisi id est tristique, finibus convallis ligula rutrum.
        Pellentesque volutpat, neque eget consequat commodo, diam orci aliquam ex, eget ornare nulla ipsum ac eros.
        Nunc quis tempus diam. Mauris congue fringilla ligula id lacinia. Donec vulputate eleifend pellentesque. Cras
        ut imperdiet metus, ut imperdiet nulla. Fusce a metus lacinia, ullamcorper ante eu, semper urna. Vestibulum eu
        velit eu ipsum dictum volutpat nec rutrum augue.
      </BpkParagraph>
      <BpkParagraph>
        Vestibulum eu posuere erat. Ut id turpis nibh. Aenean congue mi eu scelerisque bibendum. Curabitur vel metus
        elementum, laoreet erat in, pellentesque magna. Morbi consectetur lectus eu quam bibendum viverra. Donec sed
        est ut nunc facilisis dictum. Praesent lacinia neque ante, in pellentesque ante tempus sit amet. Fusce
        vehicula tincidunt auctor. Quisque ornare, diam et ultricies blandit, augue ipsum congue eros, a volutpat
        tellus massa in sem. Etiam interdum nibh nec orci molestie pretium.
      </BpkParagraph>
      <BpkParagraph>
        Quisque eleifend ullamcorper metus, eget auctor eros varius ut. Proin faucibus non mauris quis pharetra.
        Curabitur porttitor enim et sollicitudin feugiat. Morbi suscipit molestie risus, eu sodales lacus accumsan eu.
        Proin eget consequat turpis. Cras auctor magna id quam mattis, ac sollicitudin erat viverra. Aliquam sit amet
        blandit quam, vel facilisis ipsum. Maecenas at risus semper, venenatis orci vitae, aliquam velit.
      </BpkParagraph>
      <BpkParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus nunc, tempor eget dapibus eget, ultrices
        sit amet nunc. Maecenas aliquet quam nec dui hendrerit, dictum fermentum turpis finibus. Proin ante purus,
        blandit id quam vitae, dignissim venenatis felis. Donec congue sem ac felis semper, at efficitur enim
        pulvinar. Nunc molestie in orci sit amet vestibulum. Ut mattis ante ac lacus ornare, nec sagittis ex finibus.
        Fusce condimentum dolor ac dignissim rutrum. Vivamus laoreet in lectus eu congue. Aliquam mollis, mauris in
        tincidunt gravida, orci urna porta sapien, ac facilisis leo eros et elit. Vivamus fermentum neque metus, et
        convallis lectus ultricies in. Phasellus eget erat in nibh pretium convallis. Fusce sed semper ante. Phasellus
        eget elementum lacus.
      </BpkParagraph>
      <BpkParagraph>
        Nunc pretium erat nec ante faucibus molestie. Vestibulum ultrices purus quis lorem consectetur sollicitudin.
        Mauris dapibus ac libero et bibendum. In malesuada eget nisl ac bibendum. Etiam ac nulla egestas, luctus eros
        quis, ornare libero. Fusce a lacinia dolor. Nullam auctor finibus dui, sit amet luctus nibh blandit in.
        Maecenas justo tortor, faucibus ut ante ac, eleifend ornare nisl. Quisque tempus, metus sit amet fringilla
        tristique, urna mi tincidunt nulla, et tristique eros mauris sed ex. Sed lorem odio, elementum congue tellus
        vitae, suscipit hendrerit ipsum.
      </BpkParagraph>
      <BpkParagraph>
        Curabitur a posuere dolor. Maecenas accumsan magna nec risus facilisis tristique. Aliquam mollis lectus ac mi
        scelerisque condimentum. Sed id est ut felis euismod maximus. Fusce sit amet erat imperdiet, lacinia libero
        vitae, eleifend erat. Integer cursus, est vitae hendrerit eleifend, justo ipsum mattis neque, vitae
        consectetur arcu massa vitae orci. Sed rhoncus nisi id est tristique, finibus convallis ligula rutrum.
        Pellentesque volutpat, neque eget consequat commodo, diam orci aliquam ex, eget ornare nulla ipsum ac eros.
        Nunc quis tempus diam. Mauris congue fringilla ligula id lacinia. Donec vulputate eleifend pellentesque. Cras
        ut imperdiet metus, ut imperdiet nulla. Fusce a metus lacinia, ullamcorper ante eu, semper urna. Vestibulum eu
        velit eu ipsum dictum volutpat nec rutrum augue.
      </BpkParagraph>
      <BpkParagraph>
        Vestibulum eu posuere erat. Ut id turpis nibh. Aenean congue mi eu scelerisque bibendum. Curabitur vel metus
        elementum, laoreet erat in, pellentesque magna. Morbi consectetur lectus eu quam bibendum viverra. Donec sed
        est ut nunc facilisis dictum. Praesent lacinia neque ante, in pellentesque ante tempus sit amet. Fusce
        vehicula tincidunt auctor. Quisque ornare, diam et ultricies blandit, augue ipsum congue eros, a volutpat
        tellus massa in sem. Etiam interdum nibh nec orci molestie pretium.
      </BpkParagraph>
      <BpkParagraph>
        Quisque eleifend ullamcorper metus, eget auctor eros varius ut. Proin faucibus non mauris quis pharetra.
        Curabitur porttitor enim et sollicitudin feugiat. Morbi suscipit molestie risus, eu sodales lacus accumsan eu.
        Proin eget consequat turpis. Cras auctor magna id quam mattis, ac sollicitudin erat viverra. Aliquam sit amet
        blandit quam, vel facilisis ipsum. Maecenas at risus semper, venenatis orci vitae, aliquam velit.
      </BpkParagraph>
    </ModalContainer>
  ))
  .add('Close button text', () => (
    <ModalContainer
      title='Modal title'
      closeText='Done'
      buttonText='Open modal'
      getApplicationElement={() => document.getElementById('application-container')}
    >
      This is a default modal. You can put anything you want in here.
    </ModalContainer>
  ))