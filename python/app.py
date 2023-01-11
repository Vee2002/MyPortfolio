# DECLARING VARIABLES
my_number_int = 100
# print(type(my_number_int))
my_number_float = 100.0
my_number_int = 100.5

# DATATYPES
'''
There are different types of datatypes in python namely:
1. Integer - int
2. Float - float
3. String - str
3. list/array - list
4. boolean - bool: Takes in True or False values
5. tuples- Cannot be modified in the course of our code 
6. sets - Do not repeat calues of list items
7. dictionaries - Used to store data values in keys
'''
# Strings
my_string = "Vee"

# Declaring an array in python
my_array = ["Banana",57,False,"the end","Banana",57]
# my_print_statement = f"ARRAY {my_array}"
# my_print_statement = "ARRAY "+str(my_array)
# print(my_print_statement)
# Assignment to redo a function we wrote in javascript

# Declarign a set in python
my_set = {"Banana",57,False,"the end","Banana",57}
# print(f"SET {my_set}") #A set does not allow repetition of items compared to the array

#Declaring a dictionary in python
my_dictionary1 = {
    "name": "Jane Doe",
    "age": 35,
    "married": True,
    "hobbies": {"Singing","Coding","Design","Eating"}
}


my_dictionary2 = {
    "name": "John",
    "age": 22,
    "married": True,
    "hobbies": {"Swimming","Coding","Boxing","Eating"}
}

my_dictionary2["hobbies"] = "No hobbies"
# print(my_dictionary1)
# print(my_dictionary2.get("hobbies","This key does not exist"))
# DECLARING FUNCTIONS
admin_credentials = {
    "username": "Admin01",
    "password": "admin@2023",
    "first_name": "Vivian",
    "last_name": "Mosomi"
}

# def my_name(first_name):
#     print(f"Hello {first_name}")

# def verify_username_and_password(username, password):
#     if username == "Admin01" and password == "admin@2023":
#         my_name()
#         return True
#     else:
#         return False


def my_name(first_name):
    print(f"Hello {first_name}")

def verify_username_and_password(username, password):
    if username == admin_credentials.get("username") and password == admin_credentials.get("password"):
        my_name(admin_credentials.get("first_name")) #Accessing the value of a key by referencing the dictionary name .get the name of the key        
        return True
    else:
        print("Wrong username or password")
        return False

input_name = input("Input Username:")
input_pass = input("Input password:")

verify_username_and_password(input_name, input_pass)
# CONDITIONAL STATEMENTS
# LOOPS



