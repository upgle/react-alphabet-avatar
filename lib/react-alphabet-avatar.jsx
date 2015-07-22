

var ReactAlphabetAvatar = React.createClass({

    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        border_radius: React.PropTypes.number,
        colorset: React.PropTypes.array,
        user_name: React.PropTypes.string
    },

    getDefaultProps: function(){
        return {
            width: 100,
            height: 100,
            border_radius: 0
        };
    },

    shouldComponentUpdate: function(nextProps) {
        return this.props.user_name !== nextProps.user_name;
    },

    render: function(){

        var fontSize = Math.round((this.props.height + this.props.width) / 4);

        var divStyle = {
            color: 'white',
            height: this.props.height,
            width: this.props.width,
            lineHeight: this.props.height + 'px',
            textAlign: 'center',
            background: '#dddddd',
            fontSize: fontSize
        };

        return (
            <div style={divStyle}>
                G
            </div>
        );
    }

});