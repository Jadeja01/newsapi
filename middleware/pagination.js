const paginate = (req, res, next) => {
    let page = parseInt(req.query.page) || 1;
    let limit = 7;
    let startIndex = (page - 1) * limit;
    let endIndex = startIndex + limit;

    if (!res.locals.news) {
        return res.status(500).json({ error: "News data not found!" });
    }

    res.locals.paginatedNews = {
        page,
        totalPages: Math.ceil(res.locals.news.length / limit),
        totalNews: res.locals.news.length,
        news: res.locals.news.slice(startIndex, endIndex),
    };

    next();
};

module.exports = paginate;
