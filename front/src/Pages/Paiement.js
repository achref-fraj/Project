import React, { useState } from 'react';
import './Css/Paiement.css';

const PaymentProcess = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                    <div className="px-0 pt-4 pb-0 mt-3 mb-3">
                        <form id="form">
                            <ul id="progressbar">
                                {[1, 2, 3, 4].map(step => (
                                    <li key={step} className={step === currentStep ? 'active' : ''} onClick={() => setCurrentStep(step)}>
                                        <strong>Step {step}</strong>
                                    </li>
                                ))}
                            </ul>
                            <div className="progress">
                                <div className={`progress-bar ${currentStep === 1 ? 'progress-1' : currentStep === 2 ? 'progress-2' : currentStep === 3 ? 'progress-3' : ''}`} style={{ width: `${25 * (currentStep - 1)}%` }}></div>
                            </div>
                            <br />
                            <fieldset style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                                <h2>Données Personnelles</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label htmlFor="firstName">Prénom</label>
                                            <input type="text" id="firstName" name="firstName" className="input" />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="lastName">Nom</label>
                                            <input type="text" id="lastName" name="lastName" className="input" />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" className="input" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label htmlFor="address">Adresse</label>
                                            <input type="text" id="address" name="address" className="input" />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="city">Ville</label>
                                            <input type="text" id="city" name="city" className="input" />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="postalCode">Code Postal</label>
                                            <input type="text" id="postalCode" name="postalCode" className="input" />
                                        </div>
                                    </div>
                                </div>
                                <input type="button" className="next-step" value="Next Step" onClick={handleNextStep} />
                            </fieldset>
                            <fieldset style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                                <h2>Données de Livraison</h2>
                                <div className="input-group">
                                    <label htmlFor="deliveryMethod">Méthode de Livraison</label>
                                    <select id="deliveryMethod" name="deliveryMethod" className="input">
                                        <option value="standard">Standard</option>
                                        <option value="express">Express</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="deliveryDate">Date de Livraison</label>
                                    <input type="date" id="deliveryDate" name="deliveryDate" className="input" />
                                </div>
                                <input type="button" className="next-step" value="Next Step" onClick={handleNextStep} />
                                <input type="button" className="previous-step" value="Previous Step" onClick={handlePreviousStep} />
                            </fieldset>
                            <fieldset style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                                <h2>Paiement</h2>
                                <div className="input-group">
                                    <label htmlFor="cardName">Nom sur la Carte</label>
                                    <input type="text" id="cardName" name="cardName" className="input" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="cardNumber">Numéro de Carte</label>
                                    <input type="text" id="cardNumber" name="cardNumber" className="input" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="expiryDate">Date d'Expiration</label>
                                    <input type="text" id="expiryDate" name="expiryDate" className="input" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="securityCode">Code de Sécurité</label>
                                    <input type="text" id="securityCode" name="securityCode" className="input" />
                                </div>
                                <button className="pay-now-button">Payer maintenant</button>
                                <input type="button" className="next-step" value="Final Step" onClick={handleNextStep} />
                                <input type="button" className="previous-step" value="Previous Step" onClick={handlePreviousStep} />
                            </fieldset>
                            <fieldset style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                                <div className="finish">
                                    <h2 className="text text-center">
                                        <strong>FINISHED</strong>
                                        <strong>"Merci infiniment pour votre achat, nous apprécions énormément votre soutien !"</strong>
                                    </h2>
                                </div>
                                <input type="button" className="previous-step" value="merci" onClick={handlePreviousStep} />
                            </fieldset>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentProcess;
