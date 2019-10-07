import * as React from 'react'
import { Typography, Paper, TextField, Button }
	from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root : {
		margin : 20,
		padding : 20,
		maxWidth : 400
		}
	};

interface CreatePostState{
	title : string
}

class createPostComponent extends React.Component<{}, CreatePostState> {
	constructor(props){
		super(props);
		this.state =  { title : 'Sample post default' };
	}

	handleChange = ({ target : { name, value}}) => {
		this.setState({ title  : value });
	}


	
	render(){
	return (
		<Paper>
			<Typography variant="subtitle1"
				align="center"
				gutterBottom>
				Create Post
			</Typography>

			<form>
				<TextField 
					name="title" 
					label="Post"
					value={this.state.title}
					margin="normal"
					onChange={this.handleChange} />

			
				<Button 
					type="submit"
					color="primary"
					>
						Create
				</Button>
				
			</form>
		</Paper>
		)
	}
}

export const CreatePost = withStyles(styles)(createPostComponent)
