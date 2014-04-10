$(window).load(function() {
	// Input & Output handling
	$input = $('#input');
	$output = $('#output');
	$clipboard = $('#clipboard');

	$input.on("focusout", function() {
		var text = $(this).val();
		var stripped = text.replace(/(\r\n|\n|\r)/gm, "");
		// TODO: Reduce white space
		stripped = stripped.replace(/\s+/g, ' ');
		$output.val(stripped);
	});

	// Copy to clipboard
	ZeroClipboard.config({
		moviePath: "./libs/zeroclipboard/1.3.4/ZeroClipboard.swf"
	});

	var client = new ZeroClipboard($clipboard);
	client.on("load", function(client) {
		client.on("complete", function(client, args) {
			$.notify("Text copied to clipboard.", "success", {
				autoHide: true,
				clickToHide: false,
				// TODO: Positioning does not work
				elementPosition: 'top left',
				globalPosition: 'top left'
			});
		});
	});
});