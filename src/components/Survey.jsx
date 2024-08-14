import React, { useState } from 'react';
import '../index.css';
import TheSongCord from '../audios/TheSongCord.mp3';

function SurveyForm() {
  const [formData, setFormData] = useState({
    firstLastName: '',
    middleName: '',
    eyeColor: '',
    dreamVacation: '',
    shoeSize: '',
    favoriteColor: '',
    favoriteSinger: '',
    favoriteMovie: '',
    favoriteDessert: '',
    dogsOrCats: '',
    morningOrNight: '',
    examOrEssay: '',
    penOrPencil: '',
    countryOrRap: '',
    truckOrCar: '',
    mountainOrBeach: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form id="survey-form" onSubmit={handleSubmit}>
      <fieldset>
        <label>First & Last name: 
          <input required type="text" name="firstLastName" value={formData.firstLastName} onChange={handleChange} />
        </label>
        <label>Middle name: 
          <input required type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
        </label>
        <label>Eye color: 
          <input required type="text" name="eyeColor" value={formData.eyeColor} onChange={handleChange} />
        </label>
        <label>Dream Vacation: 
          <input required type="text" name="dreamVacation" value={formData.dreamVacation} onChange={handleChange} />
        </label>
        <label>Shoe size: 
          <input required type="text" name="shoeSize" value={formData.shoeSize} onChange={handleChange} pattern="[0-9]*[.,]?[0-9]*" />
        </label>
        <label>Favorite color: 
          <input required type="text" name="favoriteColor" value={formData.favoriteColor} onChange={handleChange} />
        </label>
        <label>Favorite singer: 
          <input required type="text" name="favoriteSinger" value={formData.favoriteSinger} onChange={handleChange} />
        </label>
        <label>Favorite movie: 
          <input required type="text" name="favoriteMovie" value={formData.favoriteMovie} onChange={handleChange} placeholder="Avatar: The Way of Water (obviously)" />
        </label>
        <label>Favorite dessert: 
          <input required type="text" name="favoriteDessert" value={formData.favoriteDessert} onChange={handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <legend>Dogs or Cats</legend>
        <div className="radio-group">
          <label>
            Dogs
            <input type="radio" name="dogsOrCats" value="Dogs" checked={formData.dogsOrCats === 'Dogs'} onChange={handleChange} />
          </label>
          <label>
            Cats
            <input type="radio" name="dogsOrCats" value="Cats" checked={formData.dogsOrCats === 'Cats'} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Morning or Night</legend>
        <div className="radio-group">
          <label>
            Morning
            <input type="radio" name="morningOrNight" value="Morning" checked={formData.morningOrNight === 'Morning'} onChange={handleChange} />
          </label>
          <label>
            Night
            <input type="radio" name="morningOrNight" value="Night" checked={formData.morningOrNight === 'Night'} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Exam or Essay</legend>
        <div className="radio-group">
          <label>
            Exam
            <input type="radio" name="examOrEssay" value="Exam" checked={formData.examOrEssay === 'Exam'} onChange={handleChange} />
          </label>
          <label>
            Essay
            <input type="radio" name="examOrEssay" value="Essay" checked={formData.examOrEssay === 'Essay'} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Pen or Pencil</legend>
        <div className="radio-group">
          <label>
            Pen
            <input type="radio" name="penOrPencil" value="Pen" checked={formData.penOrPencil === 'Pen'} onChange={handleChange} />
          </label>
          <label>
            Pencil
            <input type="radio" name="penOrPencil" value="Pencil" checked={formData.penOrPencil === 'Pencil'} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Country or Rap</legend>
        <div className="radio-group">
          <label>
            Country
            <input type="radio" name="countryOrRap" value="Country" checked={formData.countryOrRap === 'Country'} onChange={handleChange} />
          </label>
          <label>
            Rap
            <input type="radio" name="countryOrRap" value="Rap" checked={formData.countryOrRap === 'Rap'} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Truck or Car</legend>
        <div className="radio-group">
          <label>
            Truck
            <input type="radio" name="truckOrCar" value="Truck" checked={formData.truckOrCar === 'Truck'} onChange={handleChange} />
          </label>
          <label>
            Car
            <input type="radio" name="truckOrCar" value="Car" checked={formData.truckOrCar === 'Car'} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Mountain or Beach</legend>
        <div className="radio-group">
          <label>
            Mountain
            <input type="radio" name="mountainOrBeach" value="Mountain" checked={formData.mountainOrBeach === 'Mountain'} onChange={handleChange} />
          </label>
          <label>
            Beach
            <input type="radio" name="mountainOrBeach" value="Beach" checked={formData.mountainOrBeach === 'Beach'} onChange={handleChange} />
          </label>
        </div>
      </fieldset>

      <input id="submit-button" type="submit" value="Submit :)" />

      <audio controls autoPlay loop>
        <source src={TheSongCord} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>



    </form>
  );
}

export default SurveyForm;
