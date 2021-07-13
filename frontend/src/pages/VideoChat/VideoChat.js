import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import {  Paper,Grid,makeStyles } from '@material-ui/core';
import io from "socket.io-client"
import "./VideoChat.css"
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
	container: {
		width: '100px',
		margin: '350px 0',
		padding: 100,
		[theme.breakpoints.down('xs')]: {
		  width: '100%',
		},
	  },

	  paper: {
		padding: '10px 10px',
		border: '5px solid black',
	  },
	  margin: {
		marginTop: 20,
	  },
	  padding: {
		padding: 20,
	  },
  }));


const socket = io.connect('http://localhost:5000')                  //server adddress
export const VideoChat = () => {
	const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream                                                // for video meadia
		})

	socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
		window.location.reload();
	}
	const classes = useStyles();

	return (
		<>
		<div className="classes.container">
			<div className="video-container">
				<div className="video">
				{stream && (
						  <Grid item xs={30} md={30} className={classes.padding} className={classes.containermargin}>
							  <Paper className={classes.paper}>{localStorage.getItem('username')}</Paper>
							<video playsInline muted ref={myVideo} autoPlay style={{ width: "700px" }} />
						  </Grid>
					)};
					</div>
				<div className="video">
				<Grid item xs={30} md={30} className={classes.padding} className={classes.containermargin}>
				<Paper className={classes.paper}>{name || "Recipient Name"}</Paper>
					{callAccepted && !callEnded ?
					<video playsInline ref={userVideo} autoPlay style={{ width: "700px"}} />:
					null}
				</Grid>
				</div>
				
			<div className="myId" className="classes.container">
			<Grid item xs={12} md={6} className={classes.padding}>
			<Paper elevation={10} className={classes.paper}>
	
				<TextField
					id="filled-basic"
					label="Recipient Name"
					variant="filled"
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{ marginBottom: "20px" }}
				/>
				{console.log(me)}
				<CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
					<Button variant="contained" color="primary" startIcon={<AssignmentIcon fontSize="large" />}>
						Copy ID
					</Button>
				</CopyToClipboard>
				</Paper>
				</Grid>
				</div>
			<div className="myId" className="classes.container">
			<Grid item xs={12} md={6} className={classes.padding}>
			<Paper elevation={10} className={classes.paper}>
				<TextField
					id="filled-basic"
					label="ID to call"
					variant="filled"
					value={idToCall}
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				<div className="call-button">
					{callAccepted && !callEnded ? (
						<Button variant="contained" color="secondary" onClick={leaveCall}>
							Hang Up
						</Button>
					) : (
						<Button  variant="contained" color="secondary" aria-label="call" onClick={() => callUser(idToCall)}>
							<PhoneIcon fontSize="large" />
							Call
						</Button>
					)}
					{idToCall}
				</div>
				</Paper>
				</Grid>
			</div>
			
			<div>
			{receivingCall && !callAccepted ? (
						<div className="caller">
						<Button variant="contained" color='secondary' onClick={answerCall}>
							Answer {name} is calling
						</Button>
					</div>
				) : null}
			</div>
		</div>
		</div>
		</>
	)
            }