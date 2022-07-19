import { SelectControl, PanelBody} from '@wordpress/components';


class PostLayout extends React.Component{
   
    render(){
        
    const { layout } = this.props.attributes;

    const setPostLayout = (layout) => {
      this.props.setAttributes({
        layout
      });
    };


        return(
            <PanelBody title="Post Layout">
                 <SelectControl
                    label="Select Post Layout"
                  value= { layout }
                  options={ [
                             { label: 'Single', value: 'Single' },
                             { label: '2-Grid', value: 'two-post-layout' },
                             { label: '3-Grid', value: 'three-post-layout' },
                             { label: 'Masonry Grid', value: 'masonry-layout' },
                             ]  }
                  onChange={ setPostLayout }
                  __nextHasNoMarginBottom
                />
      </PanelBody>
        );
    }
};

export default PostLayout;
