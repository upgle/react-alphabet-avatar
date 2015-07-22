
var ReactAlphabetAvatar = React.createClass({

    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        border_radius: React.PropTypes.number,
        colorset: React.PropTypes.array,
        bold: React.PropTypes.boolean,
        text: React.PropTypes.string.isRequired
    },

    getDefaultProps: function(){
        return {
            width: 50,
            height: 50,
            border_radius: 0,
            text: 'A',
            colorset: ['#ed7872', '#5e97f6', '#ba68c8', '#66cccc', '#fbc02d', '#90a4ae', '#8d6e63', '#6492ce']
        };
    },

    getColorset: function(alphabet) {
        return this.props.colorset[this.getStringHashCode(alphabet) % this.props.colorset.length];
    },

    getStringHashCode: function(string) {
        var hash = 0, i, chr, len;
        if (string.length == 0) return hash;
        for (i = 0, len = string.length; i < len; i++) {
            chr   = string.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    },

    shouldComponentUpdate: function(nextProps) {
        return this.props.text !== nextProps.text;
    },

    render: function(){

        var alphabet = this.props.text.substring(0, 1),
            fontSize = Math.round((this.props.height + this.props.width) / 4);

        this.getColorset(alphabet);

        var divStyle = {
            margin: 0,
            padding: 0,
            color: 'white',
            height: this.props.height,
            width: this.props.width,
            lineHeight: this.props.height + 'px',
            textAlign: 'center',
            background: this.getColorset(alphabet),
            borderRadius: this.props.border_radius,
            fontSize: fontSize
        };

        return (
            <div style={divStyle}>{alphabet}</div>
        );
    }

});