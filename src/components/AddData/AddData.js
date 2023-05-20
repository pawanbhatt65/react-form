import React, { Fragment } from 'react'
import classes from './AddData.module.css'
import ShowDataContent from './ShowDataContent'

const AddData = () => {
  return (
    <Fragment>
        <div className={classes["show-data"]}>
            <ul className={classes["show-data-title"]}>
                <li>Name :</li>
                <li>Email</li>
                <li>Phone</li>
                <li>Age</li>
                <li>Gender</li>
                <li>Live In Flat</li>
                <li>Blood Group</li>
            </ul>
            <ShowDataContent />
        </div>
    </Fragment>
  )
}

export default AddData