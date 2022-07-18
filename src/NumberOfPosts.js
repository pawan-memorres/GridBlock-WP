import { __experimentalNumberControl as NumberControl, PanelBody } from '@wordpress/components';
 

class NumberOfPosts extends React.Component{
    constructor(props){
        super(props);
        

    };

  
    render(){
        
        
    const { posts_per_page } = this.props.attributes;

    const setNumberOfPosts= (posts_per_page) => {
      this.props.setAttributes({
        posts_per_page
      });
      
    };


        return(
        <>
        <PanelBody title="Number of posts">
        
      <NumberControl
            isShiftStepEnabled={ true }
            onChange={ setNumberOfPosts }
            shiftStep={ 1 }
            value={ posts_per_page }
        />
        
        </PanelBody>
        </>
        );
    }
};

export default NumberOfPosts;
