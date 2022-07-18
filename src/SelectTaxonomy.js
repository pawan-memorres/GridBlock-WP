import { SelectControl, PanelBody } from '@wordpress/components';


class SelectTaxonomy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taxonomySelection : [{label:'Select Category', value:0}],
          }

    };

    componentDidMount() {
        fetch( "http://localhost:83/wp-json/wp/v2/taxonomies")
            .then((res) => res.json())
            .then((json) => {
                const taxonomySelection = Object.keys(json).map((key)=>({
                    label:json[key].name,
                    value:json[key].slug
                  }));
                  console.log(taxonomySelection);
                this.setState({
                    taxonomySelection
                });
            })

            
    }

    render(){
        
        const { taxonomySelection } = this.state;
    const { taxonomy } = this.props.attributes;

    const setTaxonomy = (taxonomy) => {
      this.props.setAttributes({
        taxonomy
      });
    };


        return(
          <PanelBody title="Taxomony">
            <SelectControl
          label="Select Taxomony"
          value= { taxonomy }
          options={ taxonomySelection }
          onChange={ setTaxonomy }
          __nextHasNoMarginBottom
      />
      </PanelBody>
        );
    }
};

export default SelectTaxonomy;
