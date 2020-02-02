class NutritionPlan extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            weight: '',
            chest: '',
            hips: '',
            waist: '',
            goal: '',
            calories_intake: '',
            protein: '',
            carbs: '',
            fat: '',

            foods: [],
            days: [],

            states: []
        }
    }

    componentDidMount() {
        fetch('/api/food/')
        .then(resp => resp.json())
        .then(respJson => this.setState({
            foods: respJson
        }));
        fetch('/api/nutrition-plan-states/')
        .then(resp => resp.json())
        .then(respJson => this.setState({
            states: respJson
        }));
    }

    updateDayData(ix, dayData) {
        var newDays = [...this.state.days];
        newDays[ix] = dayData;
        this.setState({days: newDays});
    }

    removeDay(ix) {
        var days = [...this.state.days];
        days.splice(ix, 1);
        this.setState({days: days});
    }

    selectState (ix) {
        if (!ix) {
            this.setState({days: []});
        } else {
            this.setState({days: JSON.parse(this.state.states[ix].state)});
        }
    }

    generateNutritionPlan () {
        var preparedDays = this.state.days.map((day, ix) => {
            return {
                training: day.training === "true" ? true : false,
                ix: ix,
                meals: day.meals.map((meal, ix) => {
                    return meal.mealOptions.map(mealOption => {
                        return mealOption.foods.map(food => {
                            return food.selectedFood;
                        })
                    })
                })
            }
        });

        return fetch('/api/nutrition-plans/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                name: this.state.name,
                age: this.state.age,
                weight: this.state.weight,
                chest: this.state.chest,
                hips: this.state.hips,
                waist: this.state.waist,
                goal: this.state.goal,
                calories_intake: this.state.calories_intake,
                protein: this.state.protein,
                carbs: this.state.carbs,
                fat: this.state.fat,
                nutrition_days: preparedDays,
                raw_days: JSON.stringify(this.state.days)
            }),
            credentials: 'same-origin',
        }).then(resp => {
            resp.blob().then(pdf => {
                this.download(pdf, 'test.pdf', 'applcation/pdf')
            })
        });

    }

    download(blob, filename, contentType) {
        if(!contentType) contentType = 'application/octet-stream';
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            a.click();
    }

    render () {
        return (
            <div>
                <h3>Client Info</h3>
                <div>
                    <label className="input-label">Name</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={e => this.setState({'name': e.target.value})}/>
                </div>
                <div>
                    <label className="input-label">Age</label>
                    <input type="number"
                        value={this.state.age}
                        onChange={e => this.setState({'age': e.target.value})}/>
                </div>
                <div>
                    <label className="input-label">Weight</label>
                    <input type="number"
                        value={this.state.weight}
                        onChange={e => this.setState({'weight': e.target.value})}/>
                </div>
                <div>
                    <label className="input-label">Chest</label>
                    <input type="number"
                        value={this.state.chest}
                        onChange={e => this.setState({'chest': e.target.value})}/>
                    <label className="input-label">Hips</label>
                    <input type="number"
                        value={this.state.hips}
                        onChange={e => this.setState({'hips': e.target.value})}/>
                    <label className="input-label">Waist</label>
                    <input type="number"
                        value={this.state.waist}
                        onChange={e => this.setState({'waist': e.target.value})}/>
                </div>
                <div>
                    <label className="input-label">Goal</label>
                    <input type="text"
                        value={this.state.goal}
                        onChange={e => this.setState({'goal': e.target.value})}/>
                </div>
                <div>
                    <label className="input-label">Calories intake</label>
                    <input type="number"
                        value={this.state.calories_intake}
                        onChange={e => this.setState({'calories_intake': e.target.value})}/>
                    <label className="input-label">Protein %</label>
                    <input type="number"
                        value={this.state.protein}
                        onChange={e => this.setState({'protein': e.target.value})}/>
                    <label className="input-label">Carbs %</label>
                    <input type="number"
                        value={this.state.carbs}
                        onChange={e => this.setState({'carbs': e.target.value})}/>
                    <label className="input-label">Fat %</label>
                    <input type="number"
                        value={this.state.fat}
                        onChange={e => this.setState({'fat': e.target.value})}/>
                </div>

                <div className="preload-state">
                    <label className="input-label">Preload</label>
                    <select onChange={e => this.selectState(e.target.value)}>
                        <option value=""></option>
                        {this.state.states.map((state, ix) => (
                            <option value={ix}>calories: {state.calories}, protein: {state.protein}, carbs: {state.carbs}. fat: {state.fat}</option>
                        ))}
                    </select>
                </div>

                {this.state.days.map((day, ix) => (
                    <div key={ix+"div"}>
                        <h3 key={ix+"h3"}>Day {ix + 1} Meals <a href="#"
                           className="remove-link"
                           key={ix+'remove'}
                           onClick={this.removeDay.bind(this, ix)}>remove</a>
                        </h3>
                        <NutritionDay key={ix}
                                      foods={this.state.foods}
                                      initialData={day}
                                      updateData={this.updateDayData.bind(this, ix)} />
                    </div>
                ))}
                <div>
                    <button onClick={() => this.setState({days: [...this.state.days, {}]})}>Add day</button>
                    <button onClick={this.generateNutritionPlan.bind(this)}>Generate</button>
                </div>
            </div>
        )
    }
}


class NutritionDay extends React.Component {
    constructor(props) {
        super(props);
        if (Object.keys(props.initialData).length) {
            this.state = {...props.initialData};
            console.log(this.state);
        } else {
            this.state = {
                meals: [{}],
                training: false
            }
        }
    }

    removeMeal(ix) {
        var meals = [...this.state.meals];
        meals.splice(ix, 1);
        this.setState({meals: meals});
    }

    setState(state) {
        this.props.updateData({...this.state, ...state});
        super.setState(state);
    }

    updateMealData(ix, mealData) {
        var newMeals = [...this.state.meals];
        newMeals[ix] = mealData;
        this.setState({meals: newMeals});
    }

    getMealSummary(meal, key, max) {
        var prepared = (meal.mealOptions || []).map(mealOption => {
            return (mealOption.foods || []).reduce((sum, mealOption) => {
                var selected = mealOption.selectedFood || {};
                return sum + (selected[key] || 0) * (selected.servings || 0)
            }, 0);
        });
        if (!prepared.length) {
            return 0;
        }
        return (max ? Math.max(...prepared) : Math.min(...prepared));
    }

    getSummary() {
        var prepared = this.state.meals.map(meal => ({
            maxCalories: this.getMealSummary(meal, 'calories', true),
            minCalories: this.getMealSummary(meal, 'calories', false),
            maxProtein: this.getMealSummary(meal, 'protein', true),
            minProtein: this.getMealSummary(meal, 'protein', false),
            maxCarbs: this.getMealSummary(meal, 'carbs', true),
            minCarbs: this.getMealSummary(meal, 'carbs', false),
            maxFat: this.getMealSummary(meal, 'fat', true),
            minFat: this.getMealSummary(meal, 'fat', false),
        }))

        return (
            <div>
                <p>Summary max:
                            calories: {prepared.map(prep => prep.maxCalories).reduce((sum, e) => e + sum, 0)},
                            protein: {prepared.map(prep => prep.maxProtein).reduce((sum, e) => e + sum, 0)},
                            fat: {prepared.map(prep => prep.maxFat).reduce((sum, e) => e + sum, 0)},
                            carbs: {prepared.map(prep => prep.maxCarbs).reduce((sum, e) => e + sum, 0)}</p>
                <p>Summary min:
                            calories: {prepared.map(prep => prep.minCalories).reduce((sum, e) => e + sum, 0)},
                            protein: {prepared.map(prep => prep.minProtein).reduce((sum, e) => e + sum, 0)},
                            fat: {prepared.map(prep => prep.minFat).reduce((sum, e) => e + sum, 0)},
                            carbs: {prepared.map(prep => prep.minCarbs).reduce((sum, e) => e + sum, 0)}</p>
            </div>
        )
    }

    render() {
        return (
            <div class="nutrition-day-container">
                <div>
                    <label>Training?</label>
                    <select value={this.state.training} onChange={e => this.setState({training: e.target.value})}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                {this.getSummary()}
                {this.state.meals.map((meal, ix) => (
                    <div>
                        <p key={ix+'ix'}>Meal: {ix + 1}
                        <a href="#"
                           className="remove-link"
                           key={ix+'remove'}
                           onClick={this.removeMeal.bind(this, ix)}>remove</a></p>
                        <Meal key={ix+'meal'}
                              foods={this.props.foods}
                              initialData={meal}
                              updateData={this.updateMealData.bind(this, ix)}/>
                    </div>
                ))}
                <button onClick={() => this.setState({meals: [...this.state.meals, {}]})}>Add meal</button>
            </div>
        )
    }
}


class Meal extends React.Component {
    constructor(props) {
        super(props);
        if (Object.keys(props.initialData).length) {
            this.state = {...props.initialData};
        } else {
            this.state = {
                mealOptions: [{}]
            }
        }
    }

    updateOptionData(ix, optionData) {
        var newOptions = [...this.state.mealOptions];
        newOptions[ix] = optionData;
        this.setState({mealOptions: newOptions});
    }

    setState(state) {
        this.props.updateData({...this.state, ...state});
        super.setState(state);
    }

    removeOption(ix) {
        var newOptions = [...this.state.mealOptions];
        newOptions.splice(ix, 1);
        this.setState({mealOptions: newOptions});
    }

    render() {
        return (
            <div className="meal-container">
                {this.state.mealOptions.map((option, ix) => (
                    <div className="meal-option">
                        <p key={ix+'ix'}>Option: {ix + 1}
                        <a href="#"
                           className="remove-link"
                           key={ix+'remove'}
                           onClick={this.removeOption.bind(this, ix)}>remove</a></p>
                        <MealOption key={ix+'meal'}
                                    foods={this.props.foods}
                                    initialData={option}
                                    updateData={this.updateOptionData.bind(this, ix)}/>
                    </div>

                ))}
                <button onClick={() => this.setState({mealOptions: [...this.state.mealOptions, {}]})}>Add meal option</button>
            </div>
        )
    }
}


class MealOption extends React.Component {
    constructor (props) {
        super(props);
        if (Object.keys(props.initialData).length) {
            this.state = {...props.initialData};
        } else {
            this.state = {
                foods: [{}]
            }
        }
    }

    updateFoodData(ix, foodData) {
        var newFoods = [...this.state.foods];
        newFoods[ix] = foodData;
        this.setState({foods: newFoods});
    }

    setState(state) {
        this.props.updateData({...this.state, ...state});
        super.setState(state);
    }

    removeFood(ix) {
        var newFoods = [...this.state.foods];
        newFoods.splice(ix, 1);
        this.setState({foods: newFoods});
    }

    getSummary() {
        var prepared = this.state.foods.map(food => food.selectedFood)
            .filter(b => b);
        if (!prepared.length) {
            return null;
        }

        return (
            <p>Summary: calories: {prepared.reduce((sum, f) => sum + (f.calories || 0) * f.servings || 0, 0)},
                        protein: {prepared.reduce((sum, f) => sum + (f.protein || 0) * f.servings || 0, 0)},
                        fat: {prepared.reduce((sum, f) => sum + (f.fat || 0) * f.servings || 0, 0)},
                        carbs: {prepared.reduce((sum, f) => sum + (f.carbs || 0) * f.servings || 0, 0)}</p>
        )
    }

    render() {
        return (
            <div className="meal-option-container">
                {this.getSummary()}
                {this.state.foods.map((food, ix) => (
                    <div className="food-option">
                        <a href="#" key={ix + "remove"}
                           className="remove-link"
                           onClick={this.removeFood.bind(this, ix)}>remove</a>
                        <Food key={ix + "food"}
                              foods={this.props.foods}
                              initialData={food}
                              updateData={this.updateFoodData.bind(this, ix)} />
                    </div>
                ))}
                <button onClick={() => this.setState({foods: [...this.state.foods, {}]})}>Add food</button>
            </div>
        )
    }

}


class Food extends React.Component {
    constructor(props) {
        super(props);
        if (Object.keys(props.initialData).length) {
            this.state = {...props.initialData};
        } else {
            this.state = {
                selectedFood: {
                    name: '',
                    measurement: 'grams',
                    default_quantity: 100,
                    protein: 0,
                    calories: 0,
                    fat: 0,
                    carbs: 0,
                    existing: 0,
                    servings: 1,
                    note: ''
                }
            }
        }
    }

    setFoodName (name) {
        var existing = this.props.foods.filter(food => food.name === name);
        if (existing.length) {
            this.setState({selectedFood: {...existing[0], existing: true, servings:1}});
        } else {
            this.setState({selectedFood: {...this.state.selectedFood, existing: false, name: name}});
        }
    }

    setState(state) {
        this.props.updateData({...this.state, ...state});
        super.setState(state);
    }

    render () {
        return (
            <div className="food-container">
                <div>
                    <label className="input-label">Food name</label>
                    <input list="foods"
                        value={this.state.selectedFood.name}
                        onChange={e => this.setFoodName(e.target.value)}/>
                    <datalist id="foods">
                        {this.props.foods.map(food => (
                        <option key={food.name}>{food.name}</option>
                        ))}
                    </datalist>
                    <label className="input-label">Measurement</label>
                    <select disabled={this.state.selectedFood.existing}
                            value={this.state.selectedFood.measurement}
                            onChange={e => this.setState({selectedFood: {...this.state.selectedFood, measurement: e.target.value}})}>
                        <option value="grams">Grams</option>
                        <option value="servings">Servings</option>
                        <option value="liters">Liters</option>
                    </select>
                    <label className="input-label">Default quantity</label>
                    <select disabled={this.state.selectedFood.existing}
                            value={this.state.selectedFood.default_quantity}
                            onChange={e => this.setState({selectedFood: {...this.state.selectedFood, default_quantity: e.target.value}})}>
                        <option value="1">1</option>
                        <option value="100">100</option>
                    </select>
                    <label className="input-label">Calories</label>
                    <input type="number" className="number-input"
                        disabled={this.state.selectedFood.existing}
                        value={this.state.selectedFood.calories}
                        onChange={e => this.setState({selectedFood: {...this.state.selectedFood, calories: e.target.value}})}/>
                    <label className="input-label">Protein</label>
                    <input type="number" className="number-input"
                        disabled={this.state.selectedFood.existing}
                        value={this.state.selectedFood.protein}
                        onChange={e => this.setState({selectedFood: {...this.state.selectedFood, protein: e.target.value}})}/>
                    <label className="input-label">Carbs</label>
                    <input type="number" className="number-input"
                        disabled={this.state.selectedFood.existing}
                        value={this.state.selectedFood.carbs}
                        onChange={e => this.setState({selectedFood: {...this.state.selectedFood, carbs: e.target.value}})}/>
                    <label className="input-label">Fat</label>
                    <input type="number" className="number-input"
                        disabled={this.state.selectedFood.existing}
                        value={this.state.selectedFood.fat}
                        onChange={e => this.setState({selectedFood: {...this.state.selectedFood, fat: e.target.value}})}/>
                    <label className="input-label">Servings</label>
                    <input type="number" className="number-input"
                        value={this.state.selectedFood.servings}
                        onChange={e => this.setState({selectedFood: {...this.state.selectedFood, servings: e.target.value}})}/>
                </div>
                <div>
                    <label className="input-label">Note</label>
                    <textarea type="text"
                        value={this.state.selectedFood.note}
                        onChange={e => this.setState({selectedFood: {...this.state.selectedFood, note: e.target.value}})}/>
                </div>
            </div>
        )
    }
}
