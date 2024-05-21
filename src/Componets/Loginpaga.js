import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';



function Loginpaga() {
    const {loginUser} =useContext(AuthContext)
    const handleSubmit= e=>{
        e.preventDefault()
        const email = e.target.email.value
        const password=e.target.password.value

        email.length >0 && loginUser(email,password)

        console.log(email)
        console.log(password)
    }
    const spacing =1;
    const style={
        borderradius: '1rem 0 0 1rem'

    }
    const textcenter={
        backgroundcolor: 'rgba(0, 0, 0, 0.2)'

    }
  return (
    <div>
      <section class="vh-100" style={{backgroundcolor: "#9A616D"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{borderradius: spacing+"rem"}}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e406442a54026f46080613f7504283ce6056347ff27acf38803a7a932e1812?"
                      alt="login form" class="img-fluid" style={style} />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
      
                      <form onSubmit={handleSubmit}>
      
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                          <div class="d-flex align-items-center mb-3 pb-1">
                            <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                            <span class="h2 fw-bold mb-0">Welcome back 👋</span>
                          </div>
                        </div>
      
                        <h5 class="fw-normal mb-3 pb-3" style={{letterspacing: spacing+ 'px'}}>Sign into your account</h5>
      
                        <div class="form-outline mb-4">
                          <input type="email" id="form2Example17" class="form-control form-control-lg" name='email'/>
                          <label class="form-label" for="form2Example17">Email address</label>
                        </div>
      
                        <div class="form-outline mb-4">
                          <input type="password" id="form2Example27" class="form-control form-control-lg" name='password'/>
                          <label class="form-label" for="form2Example27">Password</label>
                        </div>
      
                        <div class="pt-1 mb-4">
                          <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>
      
                        <a class="small text-muted" href="#!">Forgot password?</a>
                        <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? 
                        <Link to="/register" style={{ color: "#393f81" }}>
                        Register Now
                      </Link> </p>
                        <a href="#!" class="small text-muted">Terms of use.</a>
                        <a href="#!" class="small text-muted">Privacy policy</a>
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-light text-center text-lg-start">
        
        <div class="text-center p-3" style={textcenter}>
          © 2024 - till date Copyright:
          <a class="text-dark" href="https://github.com/ashishsai960">Lakavath Ashish sai Naik</a>
        </div>
        
      </footer>

    </div>
  )
}

export default Loginpaga
