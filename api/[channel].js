function random () {
    return Math.random().toString(36).slice(2);
}

module.exports = (request, response) => {
    const { channel } = request.query;

    const pick = "xxxxxxxx".replace(/x/g, random);
    const content = `${channel}${pick}`;

    response
        .setHeader("Content-disposition", `attachment; filename=${channel}.txt`)
        .setHeader("Content-type", "text/plain")
        .send(content);
};
