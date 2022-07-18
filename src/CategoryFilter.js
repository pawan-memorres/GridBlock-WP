import { SelectControl, PanelBody} from '@wordpress/components';


class CategoryFilter extends React.Component{
   

    componentDidMount() {
         
    }

    render(){
        
    const { category_filter } = this.props.attributes;

    const setCategoryFilter = (category_filter) => {
      this.props.setAttributes({
        category_filter
      });
    };


        return(
            <PanelBody title="Category Filter">
                 <SelectControl
                    label="Select Category Filter"
                  value= { category_filter }
                  options={ [
                             { label: 'Yes', value: 'yes' },
                             { label: 'No', value: 'no' },
                             ]  }
                  onChange={ setCategoryFilter }
                  __nextHasNoMarginBottom
                />
      </PanelBody>
        );
    }
};

export default CategoryFilter;
