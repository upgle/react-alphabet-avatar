# react-alphabet-avatar
If browser can not show user avatar any reason, this component will show avatar consisting of character(alphabet) and background.

## Preview

## Usage
```javascript
var React = require('react');
var ReactAlphabetAvatar = require('react-alphabet-avatar');

var example = React.createClass({
  render() {
    return (
      <ReactAlphabetAvatar
      avatar="http://example.com/avatar.png",
      text="UPGLE"
      width={50}
      height={50}
      border_radius={4}
      bold={false} />
    )  
  }
});

module.exports = example;
```

## Props
| Prop           | Type    | Default  | Description
| -------------- | ------- | -------- | --------------
| text           | string  | A        | Text of alphabet avatar. (only the first character is shown.)
| avatar         | string  | null     | Image url of user avatar. (Optional)
| width          | number  | 50       | The width of alphabet avatar.
| height         | number  | 50       | The height of alphabet avatar.
| border_radius  | number  | 0        | The border radius of alphabet avatar.
| bold           | boolean | false    | The bold style of text.
| colorset       | array   |          | Colorset of background. (default => [#ed7872, #5e97f6, #ba68c8, #66cccc, #fbc02d, #90a4ae, #8d6e63, #6492ce] )
