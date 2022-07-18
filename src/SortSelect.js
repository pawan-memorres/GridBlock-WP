import { SelectControl, PanelBody} from '@wordpress/components';


class SortSelect extends React.Component{
   

    componentDidMount() {
         
    }

    render(){
        
    const { order } = this.props.attributes;

    const setSortSelect = (order) => {
      this.props.setAttributes({
        order
      });
    };


        return(
            <PanelBody title="Post Order">
                 <SelectControl
                    label="Select Order"
                  value= { order }
                  options={ [
                             { label: 'Ascending', value: 'asc' },
                             { label: 'Descending', value: 'desc' },
                             ]  }
                  onChange={ setSortSelect }
                  __nextHasNoMarginBottom
                />
      </PanelBody>
        );
    }
};

export default SortSelect;
