const eventFactory = (eventType) => {
    return {
        eventType,
        eventData
    }
};

export default eventFactory;