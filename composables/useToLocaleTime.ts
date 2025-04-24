export const useToLocaleTime = () => {
  function toLocaleTime(timestamp: string | undefined) {
    if (!timestamp) return "Unknown";

    const date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleTimeString("en-US", options);
  }

  return {
    toLocaleTime,
  };
};
