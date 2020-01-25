class Nutrition extends React.Component {
    constructor(props) {
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

            meals: [{}]
        }
    }

    componentDidMount() {
        fetch('/api/food/')
        .then(resp => resp.json())
        .then(respJson => this.setState({
            foods: respJson
        }));
    }

    generateNutritionPlan () {
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

    removeMeal(ix) {
        var meals = [...this.state.meals];
        meals.splice(ix, 1);
        this.setState({meals: meals});
    }

    updateMealData(ix, mealData) {
        var newMeals = [...this.state.meals];
        newMeals[ix] = mealData;
        this.setState({meals: newMeals});
    }

    render() {
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

                <h3>Meals</h3>
                {this.state.meals.map((meal, ix) => (
                    <div>
                        <p key={ix+'ix'}>Meal: {ix + 1}
                        <a href="#"
                           className="remove-link"
                           key={ix+'remove'}
                           onClick={this.removeMeal.bind(this, ix)}>remove</a></p>
                        <Meal key={ix+'meal'}
                              foods={this.state.foods}
                              updateData={this.updateMealData.bind(this, ix)}/>
                    </div>
                ))}
                <button onClick={() => this.setState({meals: [...this.state.meals, {}]})}>Add meal</button>

                <button onClick={this.generateNutritionPlan.bind(this)}>Generate</button>
            </div>
        )
    }
}


class Meal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealOptions: [{}]
        }
    }

    updateOptionData(ix, optionData) {
        var newOptions = [...this.state.mealOptions];
        newOptions[ix] = optionData;
        this.setState({mealOptions: newOptions});
    }

    setState(state) {
        this.props.updateData(state);
        super.setState(state);
    }

    removeOption(ix) {
        var newOptions = [...this.state.mealOptions];
        newOptions.splice(ix, 1);
        this.setState({mealOptions: newOptions});
    }

    render() {
        return (
            <div>
                {this.state.mealOptions.map((option, ix) => (
                    <div className="meal-option">
                        <p key={ix+'ix'}>option: {ix + 1}
                        <a href="#"
                           className="remove-link"
                           key={ix+'remove'}
                           onClick={this.removeOption.bind(this, ix)}>remove</a></p>
                        <MealOption key={ix+'meal'}
                                    foods={this.props.foods}
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
        this.state = {
            foods: [{}]
        }
    }

    updateFoodData(ix, foodData) {
        var newFoods = [...this.state.foods];
        newFoods[ix] = foodData;
        this.setState({foods: newFoods});
    }

    setState(state) {
        this.props.updateData(state);
        super.setState(state);
    }

    removeFood(ix) {
        var newFoods = [...this.state.foods];
        newFoods.splice(ix, 1);
        this.setState({foods: newFoods});
    }

    render() {
        return (
            <div>
                {this.state.foods.map((food, ix) => (
                    <div className="food-option">
                        <a href="#" key={ix + "remove"}
                           className="remove-link"
                           onClick={this.removeFood.bind(this, ix)}>remove</a>
                        <Food key={ix + "food"}
                              foods={this.props.foods}
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
        this.state = {
            selectedFood: {
                name: '',
                measurement: '',
                default_quantity: '',
                protein: 0,
                calories: 0,
                fat: 0,
                carbs: 0,
                existing: 0,
                servings: 0
            }
        }
    }

    setFoodName (name) {
        var existing = this.props.foods.filter(food => food.name === name);
        if (existing.length) {
            this.setState({selectedFood: {...existing[0], existing: true}});
        } else {
            this.setState({selectedFood: {...this.state.selectedFood, existing: false, name: name}});
        }
    }

    setState(state) {
        this.props.updateData(state);
        super.setState(state);
    }

    render () {
        return (
            <div>
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
            </div>
        )
    }
}
