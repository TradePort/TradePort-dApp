import React from 'react';

const Review = props => {
    return (
        <div id="review-modal" class="modal review-modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="box-header">
                        <img src="http://via.placeholder.com/250x250" alt="" />
                        <span>Rate this product</span>
                        <div class="modal-delete"><i data-feather="x"></i></div>
                    </div>
                    <div class="box-body">
        
                        <fieldset class="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Great - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Very good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Pretty good - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Good - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Average - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Mediocre - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Weak - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Bad - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Terrible - 0.5 stars"></label>
                        </fieldset>
        
                        <div class="control">
                            <textarea class="textarea is-button" placeholder="write something..."></textarea>
                            <div class="textarea-button">
                                <button class="button primary-button raised">Post review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;