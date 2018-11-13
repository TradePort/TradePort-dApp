import React, { Component } from 'react';


class UserSettings extends Component {

    render() {
        return (
            <div className="shop-wrapper">
        
            <div className="search-overlay"></div>
            
            <div className="search-input-wrapper is-desktop is-hidden">
                <div className="field">
                    <div className="control">
                        <input type="text" name="search" autofocus required />
                        <span id="clear-search" role="button"><i data-feather="x"></i></span>
                        <span className="search-help">Type the name of the product you are looking for</span>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
        
                    <div className="columns account-header">
                        <div className="column is-10 is-offset-1">
                            <div className="account-title">
                                <h2>EDIT ACCOUNT</h2>
                                <img className="brand-filigrane" src="assets/images/logo/nephos-greyscale.svg" alt="" />
                            </div>
        
                            <div className="tabs account-tabs">
                                <ul>
                                    <li className="is-active"><a href="account.html">Account</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="orders.html">Orders</a></li>
                                </ul>
                            </div>
        
                            <div className="columns is-account-grid is-multiline">
                                <div className="column is-4">
                                    <div className="flat-card upload-card is-auto">
                                        <div className="card-body">
                                            <div id="avatar-upload" className="avatar-wrapper has-simple-popover" data-content="Change profile picture" data-placement="top">
                                                <img className="profile-pic" src="http://via.placeholder.com/250x250" alt="" />
                                                <div className="upload-button">
                                                    <i className="upload-icon" data-feather="plus" aria-hidden="true"></i>
                                                </div>
                                                <input className="file-upload" type="file" accept="image/*"/>
                                            </div>
        
                                            <div className="username has-text-centered">
                                                <span>Elie Daniels</span>
                                                <span>eliedaniels@gmail.com</span>
                                            </div>
        
                                            <div className="has-text-centered">
                                                <button className="button feather-button secondary-button will-upload">
                                                    Save picture
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-8">
                                    <div className="flat-card profile-info-card is-auto">
                                        <div className="card-title">
                                            <h3>Contact info</h3>
                                            <div className="confirm-button">
                                                <a href="javascript:void(0);" role="button" className="has-simple-popover" data-content="Save Contact info" data-placement="top"><i className="feather-icons" data-feather="check"></i></a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="columns">
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">First Name</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="Elie" />
                                                        </div>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">Email</span>
                                                        <div className="control">
                                                            <input type="email" className="input is-default" value="eliedaniels@gmail.com" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Last Name</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="Daniels" />
                                                        </div>
                                                    </div>
        
                                                    <div className="info-block">
                                                        <span className="label-text">Phone</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="+1 555 623 568" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="flat-card profile-info-card is-auto has-overflow">
                                        <div className="card-title">
                                            <h3>Billing Address</h3>
        
                                            <div className="confirm-button">
                                                <a href="javascript:void(0);" role="button" className="has-simple-popover" data-content="Save Addresses" data-placement="top"><i className="feather-icons" data-feather="check"></i></a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="columns">
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Number</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="23, Block C2" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">City</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="Los Angeles" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">State</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="CA" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Street</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="Church Street" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">Postal Code</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="100065" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">Country</span>
                                                        <div className="control">
                                                            <select className="chosen-select">
                                                                <option value="United States">United States</option> 
                                                                <option value="United Kingdom">United Kingdom</option> 
                                                                <option value="Afghanistan">Afghanistan</option> 
                                                                <option value="Albania">Albania</option> 
                                                                <option value="Algeria">Algeria</option> 
                                                                <option value="American Samoa">American Samoa</option> 
                                                                <option value="Andorra">Andorra</option> 
                                                                <option value="Angola">Angola</option> 
                                                                <option value="Anguilla">Anguilla</option> 
                                                                <option value="Antarctica">Antarctica</option> 
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option> 
                                                                <option value="Argentina">Argentina</option> 
                                                                <option value="Armenia">Armenia</option> 
                                                                <option value="Aruba">Aruba</option> 
                                                                <option value="Australia">Australia</option> 
                                                                <option value="Austria">Austria</option> 
                                                                <option value="Azerbaijan">Azerbaijan</option> 
                                                                <option value="Bahamas">Bahamas</option> 
                                                                <option value="Bahrain">Bahrain</option> 
                                                                <option value="Bangladesh">Bangladesh</option> 
                                                                <option value="Barbados">Barbados</option> 
                                                                <option value="Belarus">Belarus</option> 
                                                                <option value="Belgium">Belgium</option> 
                                                                <option value="Belize">Belize</option> 
                                                                <option value="Benin">Benin</option> 
                                                                <option value="Bermuda">Bermuda</option> 
                                                                <option value="Bhutan">Bhutan</option> 
                                                                <option value="Bolivia">Bolivia</option> 
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> 
                                                                <option value="Botswana">Botswana</option> 
                                                                <option value="Bouvet Island">Bouvet Island</option> 
                                                                <option value="Brazil">Brazil</option> 
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> 
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option> 
                                                                <option value="Bulgaria">Bulgaria</option> 
                                                                <option value="Burkina Faso">Burkina Faso</option> 
                                                                <option value="Burundi">Burundi</option> 
                                                                <option value="Cambodia">Cambodia</option> 
                                                                <option value="Cameroon">Cameroon</option> 
                                                                <option value="Canada">Canada</option> 
                                                                <option value="Cape Verde">Cape Verde</option> 
                                                                <option value="Cayman Islands">Cayman Islands</option> 
                                                                <option value="Central African Republic">Central African Republic</option> 
                                                                <option value="Chad">Chad</option> 
                                                                <option value="Chile">Chile</option> 
                                                                <option value="China">China</option> 
                                                                <option value="Christmas Island">Christmas Island</option> 
                                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> 
                                                                <option value="Colombia">Colombia</option> 
                                                                <option value="Comoros">Comoros</option> 
                                                                <option value="Congo">Congo</option> 
                                                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> 
                                                                <option value="Cook Islands">Cook Islands</option> 
                                                                <option value="Costa Rica">Costa Rica</option> 
                                                                <option value="Cote D'ivoire">Cote D'ivoire</option> 
                                                                <option value="Croatia">Croatia</option> 
                                                                <option value="Cuba">Cuba</option> 
                                                                <option value="Cyprus">Cyprus</option> 
                                                                <option value="Czech Republic">Czech Republic</option> 
                                                                <option value="Denmark">Denmark</option> 
                                                                <option value="Djibouti">Djibouti</option> 
                                                                <option value="Dominica">Dominica</option> 
                                                                <option value="Dominican Republic">Dominican Republic</option> 
                                                                <option value="Ecuador">Ecuador</option> 
                                                                <option value="Egypt">Egypt</option> 
                                                                <option value="El Salvador">El Salvador</option> 
                                                                <option value="Equatorial Guinea">Equatorial Guinea</option> 
                                                                <option value="Eritrea">Eritrea</option> 
                                                                <option value="Estonia">Estonia</option> 
                                                                <option value="Ethiopia">Ethiopia</option> 
                                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> 
                                                                <option value="Faroe Islands">Faroe Islands</option> 
                                                                <option value="Fiji">Fiji</option> 
                                                                <option value="Finland">Finland</option> 
                                                                <option value="France">France</option> 
                                                                <option value="French Guiana">French Guiana</option> 
                                                                <option value="French Polynesia">French Polynesia</option> 
                                                                <option value="French Southern Territories">French Southern Territories</option> 
                                                                <option value="Gabon">Gabon</option> 
                                                                <option value="Gambia">Gambia</option> 
                                                                <option value="Georgia">Georgia</option> 
                                                                <option value="Germany">Germany</option> 
                                                                <option value="Ghana">Ghana</option> 
                                                                <option value="Gibraltar">Gibraltar</option> 
                                                                <option value="Greece">Greece</option> 
                                                                <option value="Greenland">Greenland</option> 
                                                                <option value="Grenada">Grenada</option> 
                                                                <option value="Guadeloupe">Guadeloupe</option> 
                                                                <option value="Guam">Guam</option> 
                                                                <option value="Guatemala">Guatemala</option> 
                                                                <option value="Guinea">Guinea</option> 
                                                                <option value="Guinea-bissau">Guinea-bissau</option> 
                                                                <option value="Guyana">Guyana</option> 
                                                                <option value="Haiti">Haiti</option> 
                                                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> 
                                                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> 
                                                                <option value="Honduras">Honduras</option> 
                                                                <option value="Hong Kong">Hong Kong</option> 
                                                                <option value="Hungary">Hungary</option> 
                                                                <option value="Iceland">Iceland</option> 
                                                                <option value="India">India</option> 
                                                                <option value="Indonesia">Indonesia</option> 
                                                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> 
                                                                <option value="Iraq">Iraq</option> 
                                                                <option value="Ireland">Ireland</option> 
                                                                <option value="Israel">Israel</option> 
                                                                <option value="Italy">Italy</option> 
                                                                <option value="Jamaica">Jamaica</option> 
                                                                <option value="Japan">Japan</option> 
                                                                <option value="Jordan">Jordan</option> 
                                                                <option value="Kazakhstan">Kazakhstan</option> 
                                                                <option value="Kenya">Kenya</option> 
                                                                <option value="Kiribati">Kiribati</option> 
                                                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> 
                                                                <option value="Korea, Republic of">Korea, Republic of</option> 
                                                                <option value="Kuwait">Kuwait</option> 
                                                                <option value="Kyrgyzstan">Kyrgyzstan</option> 
                                                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> 
                                                                <option value="Latvia">Latvia</option> 
                                                                <option value="Lebanon">Lebanon</option> 
                                                                <option value="Lesotho">Lesotho</option> 
                                                                <option value="Liberia">Liberia</option> 
                                                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> 
                                                                <option value="Liechtenstein">Liechtenstein</option> 
                                                                <option value="Lithuania">Lithuania</option> 
                                                                <option value="Luxembourg">Luxembourg</option> 
                                                                <option value="Macao">Macao</option> 
                                                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> 
                                                                <option value="Madagascar">Madagascar</option> 
                                                                <option value="Malawi">Malawi</option> 
                                                                <option value="Malaysia">Malaysia</option> 
                                                                <option value="Maldives">Maldives</option> 
                                                                <option value="Mali">Mali</option> 
                                                                <option value="Malta">Malta</option> 
                                                                <option value="Marshall Islands">Marshall Islands</option> 
                                                                <option value="Martinique">Martinique</option> 
                                                                <option value="Mauritania">Mauritania</option> 
                                                                <option value="Mauritius">Mauritius</option> 
                                                                <option value="Mayotte">Mayotte</option> 
                                                                <option value="Mexico">Mexico</option> 
                                                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> 
                                                                <option value="Moldova, Republic of">Moldova, Republic of</option> 
                                                                <option value="Monaco">Monaco</option> 
                                                                <option value="Mongolia">Mongolia</option> 
                                                                <option value="Montserrat">Montserrat</option> 
                                                                <option value="Morocco">Morocco</option> 
                                                                <option value="Mozambique">Mozambique</option> 
                                                                <option value="Myanmar">Myanmar</option> 
                                                                <option value="Namibia">Namibia</option> 
                                                                <option value="Nauru">Nauru</option> 
                                                                <option value="Nepal">Nepal</option> 
                                                                <option value="Netherlands">Netherlands</option> 
                                                                <option value="Netherlands Antilles">Netherlands Antilles</option> 
                                                                <option value="New Caledonia">New Caledonia</option> 
                                                                <option value="New Zealand">New Zealand</option> 
                                                                <option value="Nicaragua">Nicaragua</option> 
                                                                <option value="Niger">Niger</option> 
                                                                <option value="Nigeria">Nigeria</option> 
                                                                <option value="Niue">Niue</option> 
                                                                <option value="Norfolk Island">Norfolk Island</option> 
                                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option> 
                                                                <option value="Norway">Norway</option> 
                                                                <option value="Oman">Oman</option> 
                                                                <option value="Pakistan">Pakistan</option> 
                                                                <option value="Palau">Palau</option> 
                                                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> 
                                                                <option value="Panama">Panama</option> 
                                                                <option value="Papua New Guinea">Papua New Guinea</option> 
                                                                <option value="Paraguay">Paraguay</option> 
                                                                <option value="Peru">Peru</option> 
                                                                <option value="Philippines">Philippines</option> 
                                                                <option value="Pitcairn">Pitcairn</option> 
                                                                <option value="Poland">Poland</option> 
                                                                <option value="Portugal">Portugal</option> 
                                                                <option value="Puerto Rico">Puerto Rico</option> 
                                                                <option value="Qatar">Qatar</option> 
                                                                <option value="Reunion">Reunion</option> 
                                                                <option value="Romania">Romania</option> 
                                                                <option value="Russian Federation">Russian Federation</option> 
                                                                <option value="Rwanda">Rwanda</option> 
                                                                <option value="Saint Helena">Saint Helena</option> 
                                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                                                                <option value="Saint Lucia">Saint Lucia</option> 
                                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> 
                                                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> 
                                                                <option value="Samoa">Samoa</option> 
                                                                <option value="San Marino">San Marino</option> 
                                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                                                                <option value="Saudi Arabia">Saudi Arabia</option> 
                                                                <option value="Senegal">Senegal</option> 
                                                                <option value="Serbia and Montenegro">Serbia and Montenegro</option> 
                                                                <option value="Seychelles">Seychelles</option> 
                                                                <option value="Sierra Leone">Sierra Leone</option> 
                                                                <option value="Singapore">Singapore</option> 
                                                                <option value="Slovakia">Slovakia</option> 
                                                                <option value="Slovenia">Slovenia</option> 
                                                                <option value="Solomon Islands">Solomon Islands</option> 
                                                                <option value="Somalia">Somalia</option> 
                                                                <option value="South Africa">South Africa</option> 
                                                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> 
                                                                <option value="Spain">Spain</option> 
                                                                <option value="Sri Lanka">Sri Lanka</option> 
                                                                <option value="Sudan">Sudan</option> 
                                                                <option value="Suriname">Suriname</option> 
                                                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> 
                                                                <option value="Swaziland">Swaziland</option> 
                                                                <option value="Sweden">Sweden</option> 
                                                                <option value="Switzerland">Switzerland</option> 
                                                                <option value="Syrian Arab Republic">Syrian Arab Republic</option> 
                                                                <option value="Taiwan, Province of China">Taiwan, Province of China</option> 
                                                                <option value="Tajikistan">Tajikistan</option> 
                                                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> 
                                                                <option value="Thailand">Thailand</option> 
                                                                <option value="Timor-leste">Timor-leste</option> 
                                                                <option value="Togo">Togo</option> 
                                                                <option value="Tokelau">Tokelau</option> 
                                                                <option value="Tonga">Tonga</option> 
                                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option> 
                                                                <option value="Tunisia">Tunisia</option> 
                                                                <option value="Turkey">Turkey</option> 
                                                                <option value="Turkmenistan">Turkmenistan</option> 
                                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> 
                                                                <option value="Tuvalu">Tuvalu</option> 
                                                                <option value="Uganda">Uganda</option> 
                                                                <option value="Ukraine">Ukraine</option> 
                                                                <option value="United Arab Emirates">United Arab Emirates</option> 
                                                                <option value="United Kingdom">United Kingdom</option> 
                                                                <option value="United States">United States</option> 
                                                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> 
                                                                <option value="Uruguay">Uruguay</option> 
                                                                <option value="Uzbekistan">Uzbekistan</option> 
                                                                <option value="Vanuatu">Vanuatu</option> 
                                                                <option value="Venezuela">Venezuela</option> 
                                                                <option value="Viet Nam">Viet Nam</option> 
                                                                <option value="Virgin Islands, British">Virgin Islands, British</option> 
                                                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> 
                                                                <option value="Wallis and Futuna">Wallis and Futuna</option> 
                                                                <option value="Western Sahara">Western Sahara</option> 
                                                                <option value="Yemen">Yemen</option> 
                                                                <option value="Zambia">Zambia</option> 
                                                                <option value="Zimbabwe">Zimbabwe</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="flat-card profile-info-card is-auto has-overflow">
                                        <div className="card-title">
                                            <h3>Shipping Address</h3>
        
                                            <div className="switch-wrapper has-simple-popover" data-content="Enable if you need a different shipping address" data-placement="top">
                                                <label className="form-switch">
                                                    <input type="checkbox" className="is-switch" />
                                                    <i></i>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-body is-disabled">
                                            <div className="columns">
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Number</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="23, Block C2" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">City</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="Los Angeles" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">State</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="CA" />
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="column is-6">
                                                    <div className="info-block">
                                                        <span className="label-text">Street</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="Church Street" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">Postal Code</span>
                                                        <div className="control">
                                                            <input type="text" className="input is-default" value="100065" />
                                                        </div>
                                                    </div>
                                                    <div className="info-block">
                                                        <span className="label-text">Country</span>
                                                        <div className="control">
                                                            <select className="chosen-select">
                                                                <option value="United States">United States</option> 
                                                                <option value="United Kingdom">United Kingdom</option> 
                                                                <option value="Afghanistan">Afghanistan</option> 
                                                                <option value="Albania">Albania</option> 
                                                                <option value="Algeria">Algeria</option> 
                                                                <option value="American Samoa">American Samoa</option> 
                                                                <option value="Andorra">Andorra</option> 
                                                                <option value="Angola">Angola</option> 
                                                                <option value="Anguilla">Anguilla</option> 
                                                                <option value="Antarctica">Antarctica</option> 
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option> 
                                                                <option value="Argentina">Argentina</option> 
                                                                <option value="Armenia">Armenia</option> 
                                                                <option value="Aruba">Aruba</option> 
                                                                <option value="Australia">Australia</option> 
                                                                <option value="Austria">Austria</option> 
                                                                <option value="Azerbaijan">Azerbaijan</option> 
                                                                <option value="Bahamas">Bahamas</option> 
                                                                <option value="Bahrain">Bahrain</option> 
                                                                <option value="Bangladesh">Bangladesh</option> 
                                                                <option value="Barbados">Barbados</option> 
                                                                <option value="Belarus">Belarus</option> 
                                                                <option value="Belgium">Belgium</option> 
                                                                <option value="Belize">Belize</option> 
                                                                <option value="Benin">Benin</option> 
                                                                <option value="Bermuda">Bermuda</option> 
                                                                <option value="Bhutan">Bhutan</option> 
                                                                <option value="Bolivia">Bolivia</option> 
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> 
                                                                <option value="Botswana">Botswana</option> 
                                                                <option value="Bouvet Island">Bouvet Island</option> 
                                                                <option value="Brazil">Brazil</option> 
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> 
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option> 
                                                                <option value="Bulgaria">Bulgaria</option> 
                                                                <option value="Burkina Faso">Burkina Faso</option> 
                                                                <option value="Burundi">Burundi</option> 
                                                                <option value="Cambodia">Cambodia</option> 
                                                                <option value="Cameroon">Cameroon</option> 
                                                                <option value="Canada">Canada</option> 
                                                                <option value="Cape Verde">Cape Verde</option> 
                                                                <option value="Cayman Islands">Cayman Islands</option> 
                                                                <option value="Central African Republic">Central African Republic</option> 
                                                                <option value="Chad">Chad</option> 
                                                                <option value="Chile">Chile</option> 
                                                                <option value="China">China</option> 
                                                                <option value="Christmas Island">Christmas Island</option> 
                                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> 
                                                                <option value="Colombia">Colombia</option> 
                                                                <option value="Comoros">Comoros</option> 
                                                                <option value="Congo">Congo</option> 
                                                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> 
                                                                <option value="Cook Islands">Cook Islands</option> 
                                                                <option value="Costa Rica">Costa Rica</option> 
                                                                <option value="Cote D'ivoire">Cote D'ivoire</option> 
                                                                <option value="Croatia">Croatia</option> 
                                                                <option value="Cuba">Cuba</option> 
                                                                <option value="Cyprus">Cyprus</option> 
                                                                <option value="Czech Republic">Czech Republic</option> 
                                                                <option value="Denmark">Denmark</option> 
                                                                <option value="Djibouti">Djibouti</option> 
                                                                <option value="Dominica">Dominica</option> 
                                                                <option value="Dominican Republic">Dominican Republic</option> 
                                                                <option value="Ecuador">Ecuador</option> 
                                                                <option value="Egypt">Egypt</option> 
                                                                <option value="El Salvador">El Salvador</option> 
                                                                <option value="Equatorial Guinea">Equatorial Guinea</option> 
                                                                <option value="Eritrea">Eritrea</option> 
                                                                <option value="Estonia">Estonia</option> 
                                                                <option value="Ethiopia">Ethiopia</option> 
                                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> 
                                                                <option value="Faroe Islands">Faroe Islands</option> 
                                                                <option value="Fiji">Fiji</option> 
                                                                <option value="Finland">Finland</option> 
                                                                <option value="France">France</option> 
                                                                <option value="French Guiana">French Guiana</option> 
                                                                <option value="French Polynesia">French Polynesia</option> 
                                                                <option value="French Southern Territories">French Southern Territories</option> 
                                                                <option value="Gabon">Gabon</option> 
                                                                <option value="Gambia">Gambia</option> 
                                                                <option value="Georgia">Georgia</option> 
                                                                <option value="Germany">Germany</option> 
                                                                <option value="Ghana">Ghana</option> 
                                                                <option value="Gibraltar">Gibraltar</option> 
                                                                <option value="Greece">Greece</option> 
                                                                <option value="Greenland">Greenland</option> 
                                                                <option value="Grenada">Grenada</option> 
                                                                <option value="Guadeloupe">Guadeloupe</option> 
                                                                <option value="Guam">Guam</option> 
                                                                <option value="Guatemala">Guatemala</option> 
                                                                <option value="Guinea">Guinea</option> 
                                                                <option value="Guinea-bissau">Guinea-bissau</option> 
                                                                <option value="Guyana">Guyana</option> 
                                                                <option value="Haiti">Haiti</option> 
                                                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> 
                                                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> 
                                                                <option value="Honduras">Honduras</option> 
                                                                <option value="Hong Kong">Hong Kong</option> 
                                                                <option value="Hungary">Hungary</option> 
                                                                <option value="Iceland">Iceland</option> 
                                                                <option value="India">India</option> 
                                                                <option value="Indonesia">Indonesia</option> 
                                                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> 
                                                                <option value="Iraq">Iraq</option> 
                                                                <option value="Ireland">Ireland</option> 
                                                                <option value="Israel">Israel</option> 
                                                                <option value="Italy">Italy</option> 
                                                                <option value="Jamaica">Jamaica</option> 
                                                                <option value="Japan">Japan</option> 
                                                                <option value="Jordan">Jordan</option> 
                                                                <option value="Kazakhstan">Kazakhstan</option> 
                                                                <option value="Kenya">Kenya</option> 
                                                                <option value="Kiribati">Kiribati</option> 
                                                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> 
                                                                <option value="Korea, Republic of">Korea, Republic of</option> 
                                                                <option value="Kuwait">Kuwait</option> 
                                                                <option value="Kyrgyzstan">Kyrgyzstan</option> 
                                                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> 
                                                                <option value="Latvia">Latvia</option> 
                                                                <option value="Lebanon">Lebanon</option> 
                                                                <option value="Lesotho">Lesotho</option> 
                                                                <option value="Liberia">Liberia</option> 
                                                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> 
                                                                <option value="Liechtenstein">Liechtenstein</option> 
                                                                <option value="Lithuania">Lithuania</option> 
                                                                <option value="Luxembourg">Luxembourg</option> 
                                                                <option value="Macao">Macao</option> 
                                                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> 
                                                                <option value="Madagascar">Madagascar</option> 
                                                                <option value="Malawi">Malawi</option> 
                                                                <option value="Malaysia">Malaysia</option> 
                                                                <option value="Maldives">Maldives</option> 
                                                                <option value="Mali">Mali</option> 
                                                                <option value="Malta">Malta</option> 
                                                                <option value="Marshall Islands">Marshall Islands</option> 
                                                                <option value="Martinique">Martinique</option> 
                                                                <option value="Mauritania">Mauritania</option> 
                                                                <option value="Mauritius">Mauritius</option> 
                                                                <option value="Mayotte">Mayotte</option> 
                                                                <option value="Mexico">Mexico</option> 
                                                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> 
                                                                <option value="Moldova, Republic of">Moldova, Republic of</option> 
                                                                <option value="Monaco">Monaco</option> 
                                                                <option value="Mongolia">Mongolia</option> 
                                                                <option value="Montserrat">Montserrat</option> 
                                                                <option value="Morocco">Morocco</option> 
                                                                <option value="Mozambique">Mozambique</option> 
                                                                <option value="Myanmar">Myanmar</option> 
                                                                <option value="Namibia">Namibia</option> 
                                                                <option value="Nauru">Nauru</option> 
                                                                <option value="Nepal">Nepal</option> 
                                                                <option value="Netherlands">Netherlands</option> 
                                                                <option value="Netherlands Antilles">Netherlands Antilles</option> 
                                                                <option value="New Caledonia">New Caledonia</option> 
                                                                <option value="New Zealand">New Zealand</option> 
                                                                <option value="Nicaragua">Nicaragua</option> 
                                                                <option value="Niger">Niger</option> 
                                                                <option value="Nigeria">Nigeria</option> 
                                                                <option value="Niue">Niue</option> 
                                                                <option value="Norfolk Island">Norfolk Island</option> 
                                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option> 
                                                                <option value="Norway">Norway</option> 
                                                                <option value="Oman">Oman</option> 
                                                                <option value="Pakistan">Pakistan</option> 
                                                                <option value="Palau">Palau</option> 
                                                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> 
                                                                <option value="Panama">Panama</option> 
                                                                <option value="Papua New Guinea">Papua New Guinea</option> 
                                                                <option value="Paraguay">Paraguay</option> 
                                                                <option value="Peru">Peru</option> 
                                                                <option value="Philippines">Philippines</option> 
                                                                <option value="Pitcairn">Pitcairn</option> 
                                                                <option value="Poland">Poland</option> 
                                                                <option value="Portugal">Portugal</option> 
                                                                <option value="Puerto Rico">Puerto Rico</option> 
                                                                <option value="Qatar">Qatar</option> 
                                                                <option value="Reunion">Reunion</option> 
                                                                <option value="Romania">Romania</option> 
                                                                <option value="Russian Federation">Russian Federation</option> 
                                                                <option value="Rwanda">Rwanda</option> 
                                                                <option value="Saint Helena">Saint Helena</option> 
                                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                                                                <option value="Saint Lucia">Saint Lucia</option> 
                                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> 
                                                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> 
                                                                <option value="Samoa">Samoa</option> 
                                                                <option value="San Marino">San Marino</option> 
                                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                                                                <option value="Saudi Arabia">Saudi Arabia</option> 
                                                                <option value="Senegal">Senegal</option> 
                                                                <option value="Serbia and Montenegro">Serbia and Montenegro</option> 
                                                                <option value="Seychelles">Seychelles</option> 
                                                                <option value="Sierra Leone">Sierra Leone</option> 
                                                                <option value="Singapore">Singapore</option> 
                                                                <option value="Slovakia">Slovakia</option> 
                                                                <option value="Slovenia">Slovenia</option> 
                                                                <option value="Solomon Islands">Solomon Islands</option> 
                                                                <option value="Somalia">Somalia</option> 
                                                                <option value="South Africa">South Africa</option> 
                                                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> 
                                                                <option value="Spain">Spain</option> 
                                                                <option value="Sri Lanka">Sri Lanka</option> 
                                                                <option value="Sudan">Sudan</option> 
                                                                <option value="Suriname">Suriname</option> 
                                                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> 
                                                                <option value="Swaziland">Swaziland</option> 
                                                                <option value="Sweden">Sweden</option> 
                                                                <option value="Switzerland">Switzerland</option> 
                                                                <option value="Syrian Arab Republic">Syrian Arab Republic</option> 
                                                                <option value="Taiwan, Province of China">Taiwan, Province of China</option> 
                                                                <option value="Tajikistan">Tajikistan</option> 
                                                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> 
                                                                <option value="Thailand">Thailand</option> 
                                                                <option value="Timor-leste">Timor-leste</option> 
                                                                <option value="Togo">Togo</option> 
                                                                <option value="Tokelau">Tokelau</option> 
                                                                <option value="Tonga">Tonga</option> 
                                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option> 
                                                                <option value="Tunisia">Tunisia</option> 
                                                                <option value="Turkey">Turkey</option> 
                                                                <option value="Turkmenistan">Turkmenistan</option> 
                                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> 
                                                                <option value="Tuvalu">Tuvalu</option> 
                                                                <option value="Uganda">Uganda</option> 
                                                                <option value="Ukraine">Ukraine</option> 
                                                                <option value="United Arab Emirates">United Arab Emirates</option> 
                                                                <option value="United Kingdom">United Kingdom</option> 
                                                                <option value="United States">United States</option> 
                                                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> 
                                                                <option value="Uruguay">Uruguay</option> 
                                                                <option value="Uzbekistan">Uzbekistan</option> 
                                                                <option value="Vanuatu">Vanuatu</option> 
                                                                <option value="Venezuela">Venezuela</option> 
                                                                <option value="Viet Nam">Viet Nam</option> 
                                                                <option value="Virgin Islands, British">Virgin Islands, British</option> 
                                                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> 
                                                                <option value="Wallis and Futuna">Wallis and Futuna</option> 
                                                                <option value="Western Sahara">Western Sahara</option> 
                                                                <option value="Yemen">Yemen</option> 
                                                                <option value="Zambia">Zambia</option> 
                                                                <option value="Zimbabwe">Zimbabwe</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default UserSettings;