import { SelectControl, PanelBody } from '@wordpress/components';


class PostTypeSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postSelection : [{label:'Select post', value:0}],
            value: 0
          }

    };

    componentDidMount() {
        fetch( "/wp-json/wp/v2/types")
            .then((res) => res.json())
            .then((json) => {
                const postSelection = Object.keys(json).map((key)=>({
                    label:json[key].name,
                    value:json[key].slug
                  }));
                  // console.log(postSelection);
                this.setState({
                    postSelection
                });
            })

            
    }

    render(){
        
        const { postSelection, value } = this.state;
    const { post_type } = this.props.attributes;

    const setPostType = (post_type) => {
      this.props.setAttributes({
        post_type
      });
    };


        return(
          <PanelBody title="Post Type">
            <SelectControl
          label="Select Post Type"
          value= { post_type }
          options={ postSelection }
          onChange={ setPostType }
          __nextHasNoMarginBottom
      />
          </PanelBody>
        );
    }
};

export default PostTypeSelect;
