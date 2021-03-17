import React ,{useState}from 'react'
import {List,ListItem,ListItemAvatar,ListItemText, Modal,Button,Input} from '@material-ui/core'
import {db} from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Blog.css'
import CancelIcon from '@material-ui/icons/Cancel';
import {makeStyles} from '@material-ui/core/styles'
import firebase from 'firebase'
function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
const useStyles = makeStyles((theme) => ({
    paper: {
    //   display:'flex',
    //   flexDirection:'column',
      position: 'absolute',
      width: 800,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Blogs(props) {
    const classes=useStyles();
    const [modalStyle] = React.useState(getModalStyle);
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState('');
  const [descriptionInput,setDescritpion]=useState('')
  const handleOpen=()=>{
      setOpen(true)
  }
  const handleClose=()=>{
      setOpen(false)
  }
  const updateTodo=()=>{
    db.collection('blog').doc(props.blog.id).set({
        title:input,
        description:descriptionInput,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      },{merge:true})
        setOpen(false)
  }
    return (
        <div className="blogs_list">
             <Modal style={modalStyle}  open={open} onClose={handleClose} className="modal">
            <div className={classes.paper}>
            <CancelIcon onClick={handleClose} color="secondary"></CancelIcon>
            <h2>Update To-Do</h2>
            <Input placeholder={props.blog.title} value={input} onChange={event=> setInput(event.target.value)}/>
            <textarea placeholder={props.blog.description} value={descriptionInput} onChange={event=> setDescritpion(event.target.value)}/>
           <Button onClick={updateTodo} color="primary" variant="contained" className="update_button">Update</Button>
            </div>
        </Modal>
            <List className="blog_list">
            <ListItem>
                <ListItemAvatar>
                  
                </ListItemAvatar>
           <ListItemText primary={props.blog.title} secondary={props.blog.description} />
           </ListItem>
           <EditIcon onClick={handleOpen}  color="primary" className="edit_button">Edit Me</EditIcon>
            <DeleteIcon onClick={event=>db.collection('blog').doc(props.blog.id).delete()} color="secondary" className="delete"></DeleteIcon>
        </List>
        </div>
    )
}

export default Blogs
