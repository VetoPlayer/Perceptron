// A perceptron is created with n Weights and a learning constant.

class Perceptron{

    constructor(n,c){
        this.weights = new Array(n);
        // Start with random weights.
        // Generally speaking, How to set up the initial values is an important topic
        for(let i=0; i < this.weights.length; i++){
            this.weights = random(-1,+1);
        }
        // Learning Constant
        this.c = c;
    }

    // Function to train the perceptron
    // The weights are adjusted at each iteration to reach the right answer
    train(inputs, desired){
        let guess = this.feedforward()


    }


    // Guess the input class (-1 or +1) according to the input values
    feedforward(inputs){
        //Sum all the values
        let sum=0
        for(let i = 0; i < this.weights.length; i++){
            print("Feeding Forward")
        }   
    }


    getWeights() {
        return this.weights;
    }

}