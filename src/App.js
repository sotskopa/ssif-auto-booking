import React, { useEffect, useState } from 'react'
import './App.css';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CredentialsForm from './components/CredentialsForm';
import Button from './components/Button';
import login from './requests/login';
import Dropdown from './components/Dropdown';
import getActivityId from './requests/getActivityId';
import book from './requests/book';


function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const [userId, setUserId] = useState("")
  const [activity, setActivity] = useState("")
  const [activityId, setActivityId] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [attemptNumber, setAttemptNumber] = useState(1)

  const [error, setError] = useState("No error yet.")
  const [pingPong, setPingPong] = useState(false)

  const hasEnteredCredentials = () => {
    return name !== "" && password !== ""
  }

  const requestOptions = {
    login_url: "https://ssifautobooking.herokuapp.com/login",
    activity_url: "https://ssifautobooking.herokuapp.com/activity",
    book_url: "https://ssifautobooking.herokuapp.com/book",
    activity: activity,
    activityId: activityId,
    accessToken: accessToken,
    attemptNumber: attemptNumber,
    userId: userId,
    name: name,
    password: password,
    isRunning: isRunning,
    setAttemptNumber: setAttemptNumber,
    setUserId: setUserId,
    setAccessToken: setAccessToken,
    setError: setError,
    setActivityId: setActivityId,
    setIsRunning: setIsRunning,
  }

  const handleCredentialsSubmit = async () => {
    setError("Fetching activity_id.")

  }

  const handleStopAction = () => {
    document.getElementById("stop-button").style.transition = "0.2s";
    document.getElementById("stop-button").style.opacity = '0';
    setTimeout(() => {
      document.getElementById("stop-button").style.opacity = '1';
      setIsRunning(false)
      setError("No error yet.")
      setAttemptNumber(1)
    }, 100)
  }

  const handleDropdownChange = (value) => {
    setActivity(value)
  }

  useEffect(() => {
    if (error === "Fetching activity_id.") {
      if (activity === "") {
        setError("wtf select activity")
        return
      } else {
        getActivityId(requestOptions)
      }
    }
    if (error === "Found activity_id.") {
      setTimeout(() => {
        setError("Attempting to login.")
      }, 500)

    }
    if (error === "Attempting to login.") {
      login(requestOptions)
    }
  }, [error])

  useEffect(() => {
    if (isRunning) {
      book(requestOptions)
      setTimeout(() => {
        setPingPong(!pingPong)
      }, 12000)
    }
  }, [isRunning, pingPong, setPingPong])

  return (
    <div className="App">


      <div className="outer-container">
        <div className="inner-container">
          <div className="credits">ssif-auto-booking</div>
          <div>
            {error}
          </div>
          {isRunning ? (
            <div className="cog-wheel"><FontAwesomeIcon icon={faCog} size="6x" spin /> </div>
          ) : (
            <div className="cog-wheel"><FontAwesomeIcon icon={faCog} size="6x" /> </div>
          )}
          <div >
            First, select an activity and enter your SSIF email and password. Then, click GO to start attempting to book the activity one week in advance. The program will stop after a successful attempt.
          </div>
          <Dropdown handleDropdownChange={handleDropdownChange} />
          <CredentialsForm name={name} setName={setName} password={password} setPassword={setPassword} />
          <div>
            {isRunning ? (
              <div id="stop-button">
                <Button active={true} action={handleStopAction} text={"STOP"} />
              </div>
            ) : (
              <div id="go-button">
                {hasEnteredCredentials() ? <Button active={true} action={handleCredentialsSubmit} text={"GO"} /> : <Button active={false} action={handleCredentialsSubmit} text={"GO"} />}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
