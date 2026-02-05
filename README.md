# TypeScript Practice Project

This is my personal learning repository where I practice and experiment with TypeScript concepts. I created this while learning TypeScript to understand various features, patterns, and best practices through hands-on coding examples.



## 🎯 Overview

This repository contains my practice code while learning TypeScript. It includes examples covering fundamental to advanced concepts like interfaces, generics, abstract classes, enumerations, and module systems. These are learning exercises I worked through to understand TypeScript better.

**Note:** This is a learning/practice repository, so the code may not follow all production best practices. It's meant for experimentation and understanding TypeScript concepts.

## ✨ Concepts I Practiced

- **Function Overloading & Optional Parameters** - Learning flexible function signatures
- **Interface/Contract Definitions** - Understanding how to define and implement contracts
- **Interface Extension** - Exploring inheritance and versioning patterns
- **Static vs Instance Members** - Learning the difference between class member types
- **Abstract Classes & Templates** - Practicing template method pattern
- **Generic Classes** - Creating type-safe reusable components (Database example)
- **Generic Methods** - Writing flexible method implementations with type parameters
- **Enumerations** - Working with enum types and reverse mapping
- **Module System** - Learning ES6 imports/exports and code organization
- **Type Safety** - Using strict TypeScript configuration

## 📁 Project Structure

```
TypeScript-Practice/
├── src/                          # Core TypeScript examples
│   ├── index.ts                 # Main examples: functions, interfaces, classes
│   ├── genericClass.ts          # Generic class implementation
│   ├── genericMethod.ts         # Generic method examples
│   └── Enumeration.ts           # Enum usage and reverse mapping
├── library/                      # Modular component library
│   ├── components/
│   │   └── ProductComponent.ts  # Product component implementation
│   ├── contracts/
│   │   └── ProductContract.ts   # Interface definitions
│   └── templates/
│       └── ProductTemplate.ts   # Abstract template class
├── app/
│   └── index.ts                 # Application entry point
├── public/
│   └── index.html              # HTML demo page
├── package.json                 # Project dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn** package manager
- **TypeScript** (will be installed via npm)

## 🚀 Installation

1. **Clone or download this repository**

2. **Install TypeScript globally** (if not already installed):
   ```bash
   npm install -g typescript
   ```

3. **Install project dependencies** (if any):
   ```bash
   npm install
   ```

4. **Compile TypeScript files**:
   ```bash
   tsc
   ```

   Or compile specific files:
   ```bash
   tsc src/index.ts
   tsc src/genericClass.ts
   tsc src/genericMethod.ts
   tsc src/Enumeration.ts
   ```

5. **Run the compiled JavaScript**:
   ```bash
   node src/index.js
   node src/genericClass.js
   node src/genericMethod.js
   node src/Enumeration.js
   ```

## 💻 Usage

### Running Individual Examples

**Basic TypeScript Examples:**
```bash
# Compile and run main examples
tsc src/index.ts && node src/index.js
```

**Generic Class Example:**
```bash
tsc src/genericClass.ts && node src/genericClass.js
```

**Generic Method Example:**
```bash
tsc src/genericMethod.ts && node src/genericMethod.js
```

**Enumeration Example:**
```bash
tsc src/Enumeration.ts && node src/Enumeration.js
```

**Modular Component Example:**
```bash
tsc app/index.ts && node app/index.js
```


## 📚 TypeScript Concepts Covered

### 1. **Functions & Optional Parameters**
- Function definitions with optional parameters
- Conditional logic based on parameter presence

### 2. **Interfaces (Contracts)**
- Interface definition and implementation
- Optional properties (`?`)
- Readonly properties
- Interface extension and inheritance

### 3. **Classes**
- Static vs instance members
- Abstract classes
- Class inheritance
- Template method pattern

### 4. **Generics**
- Generic classes (`Database<T>`)
- Generic methods (`GetData<T>`)
- Type constraints and flexibility

### 5. **Enumerations**
- Enum definitions
- Enum reverse mapping
- Using enums with Date objects

### 6. **Modules**
- ES6 import/export syntax
- Default exports
- Named exports
- Code organization and separation of concerns

## 💡 Code Examples

### Interface Example
```typescript
interface ProductContract {
    readonly Name: string;
    Price: number;
    Stock: boolean;
    Qty: number;
    category?: string; // optional property
}
```

### Generic Class Example
```typescript
class Database<T> {
    public ConnectionString: T | null = null;
    public Connect() {
        for (let property in this.ConnectionString) {
            console.log(`${property} : ${this.ConnectionString[property]}`);
        }
    }
}
```

### Abstract Template Pattern
```typescript
abstract class ProductTemplate implements ProductContract {
    public Name: string = "";
    public Price: number = 0;
    public Qty: number = 0;
    public abstract Total(): number;
    public abstract Print(): void;
}
```

### Enumeration Example
```typescript
enum Weekdays {
    Sunday, Monday, Tuesday, Wednesday, 
    Thursday, Friday, Saturday
}
// Reverse mapping: Weekdays[0] returns "Sunday"
```

## 🛠 Technologies Used

- **TypeScript** - Primary language
- **JavaScript** - Compiled output
- **Node.js** - Runtime environment
- **HTML5** - Demo page

## 📖 Project Structure Details

### `/src` - Core Examples
Contains fundamental TypeScript examples demonstrating:
- Basic syntax and features
- Type system usage
- Object-oriented programming concepts

### `/library` - Component Library
A modular structure showcasing:
- **Contracts** - Interface definitions
- **Templates** - Abstract base classes
- **Components** - Concrete implementations

This structure demonstrates:
- Separation of concerns
- Code reusability
- Maintainable architecture

### `/app` - Application Entry
Main application file that uses the library components.

### `/public` - Demo
HTML page demonstrating TypeScript concepts in a browser environment.

## 🎓 What I Learned

Through this practice project, I explored and learned about:

1. ✅ How to define and use TypeScript interfaces
2. ✅ Working with optional and readonly properties
3. ✅ Implementing abstract classes and templates
4. ✅ Creating type-safe generic classes and methods
5. ✅ Using enumerations effectively
6. ✅ Organizing code with ES6 modules
7. ✅ Understanding static vs instance members
8. ✅ Interface extension and inheritance patterns

If you're also learning TypeScript, feel free to use these examples as reference or practice material!

## 📝 TypeScript Configuration

This project uses a strict TypeScript configuration (`tsconfig.json`) with:
- **Strict mode** enabled
- **Source maps** for debugging
- **Declaration files** generation
- **Modern ES modules** (nodenext)
- **Enhanced type checking** options

## 💭 About This Repository

This is my personal learning repository. I created it while studying TypeScript to:
- Practice different TypeScript concepts
- Experiment with various patterns and features
- Build understanding through hands-on coding
- Keep track of my learning progress

Feel free to explore the code, use it as reference, or fork it for your own learning!

## 📄 License

ISC License - Feel free to use this project for learning purposes.

## 🔗 Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---

**Note:** This repository represents my learning journey with TypeScript. The code is for educational purposes and may not follow all production best practices. Feel free to use it as a reference while learning TypeScript yourself! 🚀
