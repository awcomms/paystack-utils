export const lorem = (n: number = 1) => {
	const l =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod aliquam, ipsum sapiente odit possimus iure pariatur exercitationem ea consequatur tenetur quibusdam voluptas temporibus tempora quas consectetur ad vero optio.';
	let res = ``;
	for (; n >= 0; n--) {
		res = res.concat(`${l}\n`);
	}
	return res
};
