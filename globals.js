module.exports = {
	regex: {
		url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/gmi,
		collectIP: /(^ip,)|(^ip$)|(,ip,)|(,ip$)/gi,
	}
};
