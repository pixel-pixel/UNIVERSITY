package mm;

public class Page {
    public int id;
    public int physical;
    public byte R;
    public byte M;
    public int inMemTime;
    public int lastTouchTime;
    public long high;
    public long low;
    public boolean lastUsedInReplacement;

    public Page(int id, int physical, byte R, byte M, int inMemTime, int lastTouchTime, long high, long low, boolean lastUsedInReplacement) {
        this.id = id;
        this.physical = physical;
        this.R = R;
        this.M = M;
        this.inMemTime = inMemTime;
        this.lastTouchTime = lastTouchTime;
        this.high = high;
        this.low = low;
        this.lastUsedInReplacement = lastUsedInReplacement;
    }

}
