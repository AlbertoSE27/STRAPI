export default {
  async getEventsByTeacher(ctx) {
    try {
      const { teacherName } = ctx.request.params;
      if (!teacherName) {
        return ctx.notFound("Falta el nombre del profesor");
      }
      const EventsByTeacher = await strapi;
      if (!EventsByTeacher) {
        return ctx.notFound("No se encontraron eventos para el profesor");
      }
      return ctx.send(EventsByTeacher);
    } catch (error) {
      return ctx.throw(500, "Error al buscar los eventos");
    }
  },
};
