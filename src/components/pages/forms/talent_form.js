import React, { Component } from 'react';
import firebaseConf from '../../firebase.js'

import './forms.css'

class TalentForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          form: [],
          alert: false,
          alertData: {}
        };
      }
    
      showAlert(type, message) {
        this.setState({
          alert: true,
          alertData: { type, message }
        });
        setTimeout(() => {
          this.setState({ alert: false });
        }, 3000)
      }
    
      resetForm() {
        this.refs.contactForm.reset();
      }
    
      componentWillMount() {
        let formRef = firebaseConf.database().ref('talent').orderByKey().limitToLast(6);
        formRef.on('child_added', snapshot => {
          const { name, email, city, phone, bartender_exp, mixologist_exp, server_exp, sommelier_exp, photographer_exp, videographer_exp, event_producer_exp, message } = snapshot.val();
          const data = { name, email, city, phone, bartender_exp, mixologist_exp, server_exp, sommelier_exp, photographer_exp, videographer_exp, event_producer_exp, message };
          this.setState({ form: [data].concat(this.state.form) });
        })
      }
    
      sendMessage(e) {
        e.preventDefault();
        const params = {
          name: this.inputName.value,
          email: this.inputEmail.value,
          city: this.inputCity.value,
          phone: this.inputPhone.value,
          bartender_exp: this.inputbartender_exp.value,
          mixologist_exp: this.inputmixologist_exp.value,
          server_exp: this.inputserver_exp.value,
          sommelier_exp: this.inputsommelier_exp.value,
          photographer_exp: this.inputphotographer_exp.value,
          videographer_exp: this.inputvideographer_exp.value,
          event_producer_exp: this.inputevent_producer_exp.value,
          message: this.textAreaMessage.value
        };
        if (params.name && params.email && params.phone && params.phone && params.message) {
          firebaseConf.database().ref('talent').push(params).then(() => {
            this.showAlert('success', 'Your message was sent successfull');
          }).catch(() => {
            this.showAlert('danger', 'Your message could not be sent');
          });
          this.resetForm();
        } else {
          this.showAlert('warning', 'Please fill the form completely');
        };
      }
    
      render() {
        return (
          <div className="talent-container">
            {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
              <div className='container'>
                {this.state.alertData.message}
              </div>
            </div>}
            <div className='container' style={{padding: `50px 50px` }}>
              <div className='row'>
                <div className='col-sm-4'>
                  <h2>Talent Sign Up</h2>
                  <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
                    <div className='form-group'>
                      <label htmlFor='name'>Name</label>
                      <input type='text' className='form-control' id='name' placeholder='Name' ref={name => this.inputName = name} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail1'>Email</label>
                      <input type='email' className='form-control' id='email' placeholder='Email' ref={email => this.inputEmail = email} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='city'>City</label>
                      <input type='text' className='form-control' id='city' placeholder='Los Angeles' ref={city => this.inputCity = city} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='phone'>Phone</label>
                      <input type='number' className='form-control' id='phone' placeholder='+1' ref={phone => this.inputPhone = phone} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='bartender_exp'>Bartender Experience</label>
                      <input type='number' className='form-control' id='bartender_exp' placeholder='' ref={bartender_exp => this.inputbartender_exp = bartender_exp} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='mixologist_exp'>Mixologist Experience</label>
                      <input type='number' className='form-control' id='mixologist_exp' placeholder='' ref={mixologist_exp => this.inputmixologist_exp = mixologist_exp} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='server_exp'>Server Experience</label>
                      <input type='number' className='form-control' id='server_exp' placeholder='' ref={server_exp => this.inputserver_exp = server_exp} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='sommelier_exp'>Sommelier Experience</label>
                      <input type='number' className='form-control' id='sommelier_exp' placeholder='' ref={sommelier_exp => this.inputsommelier_exp = sommelier_exp} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='photographer_exp'>Photographer Experience</label>
                      <input type='number' className='form-control' id='photographer_exp' placeholder='' ref={photographer_exp => this.inputphotographer_exp = photographer_exp} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='videographer_exp'>Videographer Experience</label>
                      <input type='number' className='form-control' id='videographer_exp' placeholder='' ref={videographer_exp => this.inputvideographer_exp = videographer_exp} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='event_producer_exp'>Event Producer Experience</label>
                      <input type='number' className='form-control' id='event_producer_exp' placeholder='' ref={event_producer_exp => this.inputevent_producer_exp = event_producer_exp} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='message'>Additional Info</label>
                      <textarea className='form-control' id='message' rows='3' ref={message => this.textAreaMessage = message}></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>Send</button>
                  </form>
                </div>
                <div className='col-sm-8'>
                  <div className='row'>
                    {this.state.form.map(form =>
                      <div className='col-sm-6' key={form.phone} style={{ margin: `0px 0px 30px 0px` }}>
                        <div className='card'>
                          <div className='card-body'>
                            <h4 className='card-title'>{form.name}</h4>
                            <h6 className='card-subtitle mb-2 text-muted'>{form.city}</h6>
                            <p className='card-text'>{form.message}</p>
                            <a href={`tel:${form.phone}`} className='card-link'>{form.phone}</a>
                            <a href={`mailto:${form.email}`} className='card-link'>{form.email}</a>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

  export default TalentForm;