export const useToLocaleTime = () => {
  function toLocaleTime(timestamp: string | undefined) {
    const date = new Date(Number(timestamp));

    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return new Date(date).toLocaleTimeString("en-US", options);
  }

  return {
    toLocaleTime,
  };
};
