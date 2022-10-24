import React from 'react'
import Def from '../default'

function new_resource_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Resource for INSERTTOPIC</h1>
            <form method='POST' action='/'>
              <div className='row'>
                <div className='form-group col-sm-6'>
                <label htmlFor='name'>Place Name</label>
                <input className='form-control' id='name' name="name"  />
                </div>
                <div className='form-group col-sm-6'>
                <label   htmlFor='pic'>Place Picture</label>
                <input className='form-control' type='url' id='pic' name='pic'/>
                </div>
              </div>  
              <div className='row'>
                <div className='form-group col-sm-6'>
                <label htmlFor='city'>What city is it located in</label>
                <input  className='form-control'  id='city'  name='city'/>
                </div>
                <div className='form-group col-sm-6'>
                <label htmlFor='state'>What state?</label>
                <input  className='form-control'  id='state'  name='state'/>
                </div>
              </div>  
              <div className='row'>  
                <div className='form-group col-sm-6'>
                <label htmlFor='cuisines'>Type of Cuisine</label>
                <input  className='form-control'  id='cuisines' name='cuisines'/>
                </div>
                <div className='form-group col-sm-6'>
                <label htmlFor='founded'>What year was it founded on</label>
                <input  className='form-control'  id='founded' name='founded'/>
                </div>
              </div>
                <div className='form-group'>
                <input  className='btn btn-primary' type='submit' value='Add Place'/>
                </div>
            </form>
          </main>
        </Def>
    )
}

export default new_resource_form
