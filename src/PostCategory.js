import { SelectControl, PanelBody } from '@wordpress/components';


class PostCategory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categorySelection : [{label:'Select Category', value:0}],
          }

    };

    componentDidMount() {
        fetch( "/wp-json/wp/v2/categories")
            .then((res) => res.json())
            .then((json) => {
                const categorySelection = Object.keys(json).map((key)=>({
                    label:json[key].name,
                    value:json[key].slug
                  }));
                this.setState({
                    categorySelection
                });
            })
            
    }

    render(){
        
    const { categorySelection } = this.state;
    const { category_name } = this.props.attributes;

    const setCategory = (category_name) => {
      this.props.setAttributes({
        category_name
      });
    };


        return(
          <PanelBody title="Category">
            <SelectControl
          label="Select Category"
          value= { category_name }
          options={ categorySelection }
          onChange={ setCategory }
          __nextHasNoMarginBottom
      />
      </PanelBody>
        );
    }
};

export default PostCategory;
