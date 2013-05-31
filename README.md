#unicorn
Add some color to your command line.

## Available styles
<table>
    <tr>
        <td><strong>Colors</strong></td>
        <td><strong>Specials</strong></td>
    </tr>
    <tr>
        <td>Black</td>
        <td>Normal</td>
    </tr>
    <tr>
        <td>Red</td>
        <td>Bold</td>
    </tr>
    <tr>
        <td>Green</td>
        <td>Underline</td>
    </tr>
    <tr>
        <td>Yellow</td>
        <td>Blinking</td>
    </tr>
    <tr>
        <td>Blue</td>
        <td>Reverse</td>
    </tr>
    <tr>
        <td>Magenta</td>
    </tr>
    <tr>
        <td>Cyan</td>
    </tr>
    <tr>
        <td>White</td>
    </tr>
</table>

## Installation
Unicorn is available through NPM, so all you have to do is:

	npm install unicorn

## Usage
Unicorn extends the `String` class to add his features so you don't need to save a reference to it. Just make sure you've installed the module.:

	require('unicorn').install();

### Colors

	console.log('red'.red());
	console.log('background red'.red(true));
	console.log('green'.green());
	console.log('background green'.green(true));
	console.log('background blue and yellow text'.green(true).yellow());
	console.log('background white and black text'.white(true).black());
	
![colors](https://dl.dropboxusercontent.com/u/3420025/Images/Misc/unicorn/colors.png)

### Specials

	console.log('thin'.normal());
	console.log('bold'.bold());
	console.log('underline'.underline());
	console.log('blinking'.blinking());
	console.log('reverse'.reverse());

![specials](https://dl.dropboxusercontent.com/u/3420025/Images/Misc/unicorn/specials.gif)

### Mixed

	console.log('foo'.red().yellow(true).bold());
	console.log('bar'.green(true).underline().black());
	console.log('lorem'.underline().magenta(true).white());
	console.log('ipsum'.bold().magenta().blue(true));
	
![mixed](https://dl.dropboxusercontent.com/u/3420025/Images/Misc/unicorn/mixed.png)

### Unicorn
The best feature.

	var i = 5;
	while(i > 0) {
		console.log('UNICORN'.unicorn());
		--i;
	}
	
![mixed](https://dl.dropboxusercontent.com/u/3420025/Images/Misc/unicorn/unicorn.png)

## License
Unicorn is available under [MIT license](http://www.opensource.org/licenses/mit-license.php).