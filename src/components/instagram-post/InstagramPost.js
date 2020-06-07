import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './InstagramPost.css';

class InstagramPost extends Component {

  render() {
    return (
      <div className="InstagramPost">
        <InstagramEmbed
            url='https://www.instagram.com/p/CA2lXBqhNa4/'
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
      </div>
    );
  }
}

export default InstagramPost;