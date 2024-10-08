import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// Define the type for a menu item
type MenuItem = {
  dishName: string;
  description: string;
  course: string;
  price: string;
};

const App: React.FC = () => {
  // State for menu items and new input
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  // Predefined courses
  const courses = ['Starter', 'Main', 'Dessert'];

  // Add new item to the menu
  const addMenuItem = () => {
    const newItem: MenuItem = { dishName, description, course, price };
    setMenuItems([...menuItems, newItem]);
    // Clear inputs after adding
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (Starter, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <Button title="Add to Menu" onPress={addMenuItem} />

      {/* Display the Menu */}
      <Text style={styles.header}>Prepared Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />

      {/* Display total number of menu items */}
      <Text style={styles.footer}>Total menu items: {menuItems.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default App;
