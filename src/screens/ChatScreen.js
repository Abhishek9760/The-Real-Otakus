import React from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {socket} from '../socket';
import {getUniqueId} from 'react-native-device-info';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isLoading: false,
      isTyping: false,
      loadMessages: false,
    };
  }

  componentDidMount() {
    socket.emit('join-room', 'global');
    // socket.emit('get-history');
    // socket.on('load-old-chat', () => {
    //   // console.log('loading messages', getUniqueId());
    //   console.log(this.state.messages);
    // });
    socket.on('new-message', msg => {
      // if (this.state.isLoading) {
      //   this.setState({isLoading: false});
      // }
      console.log('send to clients');
      // console.log('client', messages);
      // setMessages(p => GiftedChat.append(p, msg));
      this.setState(perviousState => ({
        messages: GiftedChat.append(perviousState.messages, msg),
      }));
    });

    socket.on('load-old-chat', () => {
      console.log('loading history..', getUniqueId());
      let msgs = [...this.state.messages];
      socket.emit('show-loader');
      socket.emit('send-message', msgs.splice(0, 16));
    });

    // socket.on('set-loader', () => this.setState({isLoading: true}));
    socket.on('show-typing', name =>
      this.setState({isTyping: !this.state.isTyping}),
    );
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        // wrapperStyle={{
        //   left: {
        //     backgroundColor: '#ccc',
        //   },
        //   // right: {
        //   //   backgroundColor: '#fff',
        //   // },
        // }}
        // textStyle={{
        //   right: {
        //     color: 'yellow',
        //   },
        // }}
      />
    );
  }

  // socket.emit('online-status', 1);
  // }, []);

  onSend = (msg = []) => {
    console.log(msg);
    socket.emit('send-message', msg);
    this.setState(perviousState => ({
      messages: GiftedChat.append(perviousState.messages, msg),
    }));
  };

  // renderMessage = props => {
  //   if (this.state.messages.length !== 0) {
  //     return <Message {...props} />;
  //   } else {
  //     return (
  //       <View style={{flex: 1}}>
  //         <Text>Hello no data found</Text>
  //       </View>
  //     );
  //   }
  // };

  loadEarlier = () => {
    console.log(socket.connected);
    if (socket.connected) {
      this.setState({loadMessages: true});
      this.setState({messages: []});
      socket.emit('get-history', () => this.setState({loadMessages: false}));
    }
  };

  setIsTyping = () => {
    socket.emit('user-typing', getUniqueId());
    this.setState({
      isTyping: !this.state.isTyping,
    });
  };

  // renderFooter = (name) => {
  //   console.log(this.state.isTyping);
  //   if (this.state.isTyping) {
  //     return <Text>{name} is typing</Text>;
  //   }
  //   return null;
  // };

  render() {
    return (
      // <>
      //   {this.state.isLoading ? (
      //     <Loader />
      //   ) : (
      <GiftedChat
        renderUsernameOnMessage
        messages={this.state.messages}
        renderBubble={this.renderBubble}
        // renderFooter={this.renderFooter}
        onSend={msg => this.onSend(msg)}
        // renderMessage={this.renderMessage}
        onInputTextChanged={this.setIsTyping}
        isTyping={this.state.isTyping}
        user={{
          _id: getUniqueId(),
          name: getUniqueId(),
        }}
        loadEarlier
        isLoadingEarlier={this.state.loadMessages}
        onLoadEarlier={this.loadEarlier}
        // parsePatterns={linkStyle => [
        //   {
        //     pattern: /#(\w+)/,
        //     style: {...linkStyle, color: 'lightgreen'},
        //     onPress: props => console.log(`press on ${props}`),
        //   },
        // ]}
      />
      // )}
      // </>
    );
  }
}

export default ChatScreen;
