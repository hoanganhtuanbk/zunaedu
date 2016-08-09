/**
 * Created by duyhung on 05/07/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

export class EmailVerified extends React.Component{
    render() {
      setTimeout(function() {
        window.location = '/login'
      }, 1000);
        return (
            <div>
                <h1>Registration verified successfully</h1>
                Your are now ready to <Link to='/login'><a href="">login</a></Link>
            </div>
        )
    }
}
