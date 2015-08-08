
var ReactAlphabetAvatar = React.createClass({

    propTypes: {
        // data properties
        avatar: React.PropTypes.string,
        text: React.PropTypes.string.isRequired,

        // style option properties
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        border_radius: React.PropTypes.number,
        colorset: React.PropTypes.array,
        bold: React.PropTypes.boolean
    },

    getDefaultProps: function() {
        return {
            text: 'A',
            width: 50,
            height: 50,
            border_radius: 0,
            colorset: ['#ed7872', '#5e97f6', '#ba68c8', '#66cccc', '#fbc02d', '#90a4ae', '#8d6e63', '#6492ce'],
            bold: false
        };
    },

    getInitialState: function() {
        return {
            error : false
        };
    },

    getColorset: function(text) {
        return this.props.colorset[this.getStringHashCode(text) % this.props.colorset.length];
    },

    getStringHashCode: function(string) {
        var hash = 0, i, chr, len;
        if (string.length === 0) return hash;
        for (i = 0, len = string.length; i < len; i++) {
            chr   = string.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    },

    imageError: function() {
        this.setState({error: true});
    },

    render: function() {

        var avatar,
            alphabet = this.props.text.substring(0, 1).toUpperCase(),
            fontSize = Math.round((this.props.height + this.props.width) / 4);

        var divStyle = {
                overflow: 'hidden',
                margin: 0,
                padding: 0,
                color: 'white',
                height: this.props.height,
                width: this.props.width,
                lineHeight: this.props.height + 'px',
                textAlign: 'center',
                background: this.getColorset(this.props.text),
                borderRadius: this.props.border_radius,
                fontSize: fontSize
            },
            imgStyle = {
                height: this.props.height,
                width: this.props.width
            };

        if(this.state.error === false && this.props.avatar) {
            avatar = <img style={imgStyle} src={this.props.avatar} onError={this.imageError} />;
        }

        if(this.props.bold === true) {
            divStyle.fontWeight = 'bold';
        }

        return (
            <div style={divStyle}>
                {avatar}
                {alphabet}
            </div>
        );
    }
});
