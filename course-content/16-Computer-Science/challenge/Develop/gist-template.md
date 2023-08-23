# Cracking the code of RegEx

For this homework assignment we had to research regular experessions of RegEx. From what I have studied, RegEx are a extremely useful way to search for anything in a document but can also be used to veryfy user entry. The issue, is that they look insane and impossible to understand. After some research though, one will notice that they all have a unique patter and are legible if you take the time to break them down.


## Summary

I will be going over RegEx for matching an email that a user can enter.

here is the RegEx code snippet


`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

I will break down this expression in small groups and give an explantion of what each expression is doing.


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors 
Anchors in RegEx are special chartacters that define specific positions within the text where a match must occur. There are two main anchors:
`^` - The Beginning of the Line Anchor. It is used to specify that the match should start from the very begining of the input.

`$` - The end of the line anchor. Used to specify that the match should extend until the very end of the input.

So when we look at our email regex :

`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

The `^` simply gives the command that the pattern match should start at the BEGINGING of the string that the user inputs. The `$` at the end of the regex anchors the match pattern to END at the end of the string.

### Quantifiers

Quantifiers specify how many times a particular element should appear in the input text. They can make regex more flexible and capable of matching patterns of varying length.

In this email regex, there are a decent amount of quantifiers used.

`+` is used in the username part of the email regex:

`/^([a-z0-9_\.-]+)`

So for this snippet of the code, the + is looking for 1 or more of the defined characters we put before it for the username. So it is looking for any characters a-z, numbers 0-9, underscores, periods, and hyphens.

We also have a range quantifier at the end of this regex:

`([a-z\.]{2,6})$`

this part of the regex is looking at the '.com' or '.org' part of an email address. It is looking for lowercase lettters and a period, the quantifier {2,6} sets a range of minimum and maximum. so if the user enters a '.whatever' it needs to be between 2-6 characters and can only have letters and a dot.



### Grouping Constructs
Grouping constructs are how the regex organize specific parts of the pattern we are searching for. They allow you to treat the enclosed elements as a single unit. This is useful since emails have essentially 3 difference parts that all very. The username, the domain name and the top-level domain part of the email (.com/.net ...).

So for this email regex we have three difference parts.

1. `([a-z0-9_\.-]+)` - User Name
2. `([\da-z\.-]+)`   - Domain Name
3. `([a-z\.]{2,6})`  - Top Level Domain

both the username and domain name use the + quantifier shoing that those parts of the email can have any one of the provided characters in that section of the regex. 

breaking each area up and giving each area different paramenters is good because it will more easily search an email even if they look very different. In regex it is important to cast a wide net.

the @ and the . are always part of the email and are searching in the regex as a litteral expression.
### Bracket Expressions

Bracket Expressions or character classes allow you to specify a set of characters that the regex search should match. By enclosing the characters within brackets you create a character expression. The regex search will attempt to match ANY one of the characters listed inside the brackets when it comes across one.

So again, in this example we have 3 bracket expressions for each part of the email.

the username will match any lowercase(a-z), digit(0-9), underscore, period, or hyphen.

the domain name will match any lowercase, period or hyphen.

the top level domain will match lowercase letters and a period.


### The OR Operator
n/a
used similar to coding, could be used here but would not be as good as what we have. could look for (.com | .net | .org)
### Flags 
n/a

can be added to regex at the end of the expression i believe.

i- will make the pattern-matching case sensitive so it will both match upper and lowercase letters.

g- Enables global matching, meaning regex will find all occurrences fo the pattern in the input text, not just the first one.

m- Enables multiline matching which changes how ^ and $ anchors work. With this, ^ matches the start of each line, and $ matches the end of each line.


### Character Escapes


## Author

[GitHub](https://github.com/ThomasMunzar)
[LinkedIn](https://www.linkedin.com/in/thomas-munzar-659b51250/)
