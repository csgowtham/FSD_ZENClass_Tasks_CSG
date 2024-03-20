class Circle {
    //  The radius property is initialized to 1.0 by default and the color property is initialized to "red" by default
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    // Getter method to get the radius
    getRadius() {
      return this.radius;
    }
  
    // Getter method to get the color
    getColor() {
      return this.color;
    }
  
    // Setter method to set the radius
    setRadius(radius) {
      this.radius = radius;
      console.log("radius: "+this.radius)
    }
  
    // Setter method to set the color
    setColor(color) {
      this.color = color;
      console.log("color: "+this.color)
    }
  
    // Method to calculate the area of the circle
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Method to calculate the circumference of the circle
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // toString method to return a string representation of the circle object
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  }
  
  let c = new Circle();
  console.log(c.getArea());
  console.log(c.getCircumference());
  console.log(c.getColor());
  console.log(c.getRadius());
  c.setColor('blue');
  c.setRadius(2.0);
  console.log(c.toString());