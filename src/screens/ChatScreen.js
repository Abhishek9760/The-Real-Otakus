import React from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {socket} from '../socket';
import {getUniqueId} from 'react-native-device-info';
import {connect} from 'react-redux';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isLoading: false,
      isTyping: false,
      loadMessages: false,
      online: 0,
    };
  }

  componentDidMount() {
    socket.emit('get-users-count');
    socket.on('updated-users-count', num => this.setState({online: num}));
    socket.on('new-message', msg => {
      this.setState(perviousState => ({
        messages: GiftedChat.append(perviousState.messages, msg),
      }));
    });

    socket.on('load-old-chat', () => {
      let msgs = [...this.state.messages];
      socket.emit('show-loader');
      socket.emit('send-message', msgs.splice(0, 15));
    });
    socket.on('show-typing', name => this.setState({isTyping: true}));
    socket.on('hide-typing', () => this.setState({isTyping: false}));
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  onSend = (msg = []) => {
    socket.emit('send-message', msg);
    socket.emit('stop-typing');
    this.setState(perviousState => ({
      messages: GiftedChat.append(perviousState.messages, msg),
      isTyping: false,
    }));
  };

  loadEarlier = () => {
    if (socket.connected && this.online > 1) {
      this.setState({loadMessages: true, messages: []});
      socket.emit('get-history', () => this.setState({loadMessages: false}));
    }
  };

  setIsTyping = () => {
    if (this.state.messages.length !== 0) {
      socket.emit('user-typing', '');
    }
  };

  renderInputToolbar = props => {
    return <InputToolbar {...props} textInputStyle={{color: '#000'}} />;
  };

  render() {
    return (
      <>
        {!socket.connected ? (
          <Text>Connecting...</Text>
        ) : (
          <>
            <ShowOnline>
              <Active>{this.state.online} active</Active>
            </ShowOnline>
            <GiftedChat
              renderUsernameOnMessage
              messages={this.state.messages}
              onSend={msg => this.onSend(msg)}
              onInputTextChanged={this.setIsTyping}
              isTyping={this.state.isTyping}
              user={{
                _id: getUniqueId(),
                name: this.props.userChat.username,
                avatar: this.props.userChat.profilePic,
              }}
              loadEarlier
              isLoadingEarlier={this.state.loadMessages}
              onLoadEarlier={this.loadEarlier}
              renderInputToolbar={this.renderInputToolbar}
            />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const {userChat, appTheme} = state;
  return {userChat, appTheme};
};

export default connect(mapStateToProps)(ChatScreen);

const ShowOnline = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  margin-top: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${props => props.theme.CHAT_ACTIVE_COLOR};
`;

const Active = styled(Text)`
  font-family: 'Paladise Script';
`;
